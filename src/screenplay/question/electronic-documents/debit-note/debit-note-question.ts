import { Text } from '@serenity-js/web';
import { DebitNoteLocators } from '../../../ui/electronic-documents/debit-note/debit-note-ui';
import { Question } from '@serenity-js/core';

export const MessageDisplayed = () =>
    Question.about<string>(
        'Pop-up message',
        actor => Text.of(DebitNoteLocators.messsageSuccefullyPopUp()).answeredBy(actor)
    )