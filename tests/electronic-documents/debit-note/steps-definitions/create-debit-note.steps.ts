import { Given, Then, When } from '@cucumber/cucumber';
import { Actor } from '@serenity-js/core';
import { DebitNoteTask } from '../../../../src/screenplay/tasks/electronic-documents/debit-note/debit-note-task';
import { Ensure, equals } from '@serenity-js/assertions';
import { MessageDisplayed } from '../../../../src/screenplay/question/electronic-documents/debit-note/debit-note-question';
import { MESSAGE } from '../../../../test-data/electronic-documents/debit-note/debitNoteData';


Given('{actor} is on the debit or credit note creation screen', async (actor: Actor) => {
   await actor.attemptsTo(
      DebitNoteTask.intoScreenDebitNote()
   )
});

When('{pronoun} selects a debit note from an electronic invoice', async (actor: Actor) => {
   await actor.attemptsTo(
      DebitNoteTask.searchInvoiceScreen()
   )
});


When('{pronoun} enter the reason for the note and a valid prefix', async (actor: Actor) => {
   await actor.attemptsTo(
      DebitNoteTask.intoGeneralInformation()
   )
})

When('{pronoun} add a product or service to the table and save the note', async (actor: Actor) => {
   await actor.attemptsTo(
      DebitNoteTask.createDebitNoteCreateNewProduct()
   )
})

Then("{pronoun} verifies that the note was successfully created", async (actor: Actor) => {

   await actor.attemptsTo(
      Ensure.that(MessageDisplayed(), equals(MESSAGE.SUCCESS.DEBIT_NOTE_CREATED))
   )
})
