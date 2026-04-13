import { Duration, Task, Wait } from '@serenity-js/core';
import { Enter, Click, isVisible } from '@serenity-js/web';
import { LoginPage } from '../../ui/login/login';
import { APP_CONSTANTS } from '../../../utils/helpers/constants.helper';
import { Dashboard } from '../../ui/login/dashboard';

export class Login {
    /**
     * Login with credentials
     * @param email - email of user
     * @param password - password of user
     */
    static toLogInWithValidCredentials(email: string, password: string): Task {
       return Task.where('The actor login with valid credentials',
            Click.on(LoginPage.loginButton()),
            Enter.theValue(email).into(LoginPage.emailField()),
            Enter.theValue(password).into(LoginPage.passwordField()),
            Click.on(LoginPage.loginNextButton()),
            Wait.upTo(Duration.ofMilliseconds(APP_CONSTANTS.TIMEOUT))
            .until(Dashboard.dashboardQuestion(), isVisible())
        );
    }
}