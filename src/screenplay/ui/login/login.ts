import { By, PageElement } from '@serenity-js/web';

/**
 * LoginPage: Lean Page Object Pattern
 * The `LoginPage` class contains static readonly properties representing login button, next button,
username field, and password field elements on a web page.
 */

/*  */
export class LoginPage {
    static readonly loginButton = () =>
        PageElement.located(By.id("dp-landing-login-redirect-btn"))
            .describedAs('login input');

    static readonly loginNextButton = () =>
        PageElement.located(By.id("dp-login-next-button-submit-btn"))
            .describedAs('login next input');

    static readonly emailField = () =>
        PageElement.located(By.id("dp-login-email-input-txt"))
            .describedAs('Field email input');

    static readonly passwordField = () =>
        PageElement.located(By.id("dp-login-password-input-txt"))
            .describedAs('Field password input');
}


