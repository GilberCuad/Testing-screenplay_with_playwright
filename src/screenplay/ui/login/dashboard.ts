import { By, PageElement } from '@serenity-js/web';

export class Dashboard {
    static readonly dashboardQuestion = () =>
        PageElement.located(By.id("dp-header-home-redirect-ico"))
            .describedAs('Locator icon home on header');
}