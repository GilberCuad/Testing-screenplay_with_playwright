import { When, Then, Given } from '@cucumber/cucumber';
import { Ensure, equals } from '@serenity-js/assertions';
import { Actor } from '@serenity-js/core';
import { DashboardIsVisible } from '../../../../src/screenplay/question/login/login';
import { Login } from '../../../../src/screenplay/tasks/login/login-task';
import { ENV } from '../../../../src/utils/helpers/environment.helper';
import { Navigate } from '@serenity-js/web';

/**
 * Given Steps - Scenario preconditions
 */

Given("{actor} enter the URL for diggi pymes", async (actor: Actor) => {
    await actor.attemptsTo(
        Navigate.to("/#home-page")
    )
})

When('{pronoun} enters the diggi pymes URL and logs in with a valid email and password.', async (actor: Actor) =>
    await actor.attemptsTo(
        Login.toLogInWithValidCredentials(ENV.USER_MAIL, ENV.PASSWORD)
    )
);

Then('{pronoun} should see the diggi pymes header when you log in', async (actor: Actor) => {
    await actor.attemptsTo(
        Ensure.that(
            DashboardIsVisible(), equals(true)
        )
    )
});