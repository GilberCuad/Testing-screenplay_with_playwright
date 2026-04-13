import { Question } from '@serenity-js/core';
import { Dashboard } from '../../ui/login/dashboard';

export const DashboardIsVisible = () =>
   Question.about<boolean>(
    'Header icon is visible',
    async actor => {
      try {
        const element = await Dashboard.dashboardQuestion().answeredBy(actor);
        return await element.isVisible();
      } catch {
        return false;
      }
    }
  );