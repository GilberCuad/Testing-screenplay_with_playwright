import { Enter, Click, By, PageElement } from '@serenity-js/web';
import { Task, Answerable } from '@serenity-js/core';

export class BaseHelp {
    
    /* The `selectFromList` method in the `SearchSelectHelp` class is creating a Serenity task that
    simulates the action of selecting a value from an input on a web page. Here's a breakdown of
    what it does: */
    static selectFromList(selectLocator: Answerable<PageElement>, optionText: string): Task {
        return Task.where("The actor selects a value from an input.",
            Click.on(selectLocator),
            Click.on(PageElement.located(By.cssContainingText('li', optionText)))
        )
    };

    /* This method `selectSearchList` is creating a Serenity task that simulates the action of selecting an
    option from a search list on a web page. Here's a breakdown of what it does: */

    static selectSearchList(selectLocator: Answerable<PageElement>, optionText: string): Task {
        return Task.where("The actor search and selects an option from the input.",
            Click.on(selectLocator),
            Enter.theValue(optionText).into(selectLocator),
            Click.on(PageElement.located(By.cssContainingText('li', optionText)))
        )
    };
}




