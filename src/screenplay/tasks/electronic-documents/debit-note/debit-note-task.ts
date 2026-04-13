import { Duration, Task, Wait } from '@serenity-js/core';
import { Enter, Click, Clear, isVisible } from '@serenity-js/web';
import { DebitNoteLocators } from '../../../ui/electronic-documents/debit-note/debit-note-ui';
import { DATA_DEBIT_NOTE } from '../../../../../test-data/electronic-documents/debit-note/debitNoteData';
import { APP_CONSTANTS } from '../../../../utils/helpers/constants.helper';
import { BaseHelp } from '../../../../utils/helpers/base-helper';

export class DebitNoteTask {
    static readonly data = DATA_DEBIT_NOTE;

    /* The `static intoScreenDebitNote()` method is defining a Serenity task that represents the action
    of navigating to the debit note screen from the home screen. Here's a breakdown of what the
    method does: */
    static intoScreenDebitNote(): Task {
        return Task.where("The actor navigates the debit note screen from home.",
            Click.on(DebitNoteLocators.intoModuleElectronicDocuments()),
            Click.on(DebitNoteLocators.intoDebitNoteScreen())
        )
    };
    /**
     * This function searches for an invoice screen by entering the invoice number and clicking on the
     * debit note button.
     * @returns A Task object is being returned. The Task includes actions to enter a value into a search
     * field on the debit note screen and then click on a specific button related to the invoice number
     * provided.
     */

    static searchInvoiceScreen(): Task {
        return Task.where('The actor into debit note screen',
            Enter.theValue(this.data.INVOICE_TEST.numberInvoice).into(DebitNoteLocators.searchInvoice()),
            Click.on(DebitNoteLocators.buttonDebitNoteTheInvoice(this.data.INVOICE_TEST.prefixInvoice, this.data.INVOICE_TEST.numberInvoice))
        );
    }


    /**
     * The function `intoGeneralInformation` returns a Task object with the actor, prefix, and reason of
     * the note selected from a list.
     * @returns A Task object is being returned with the specified information about the actor, prefix,
     * and reason of the note. The information is retrieved using the selectFromList method with the
     * provided parameters.
     */
    static intoGeneralInformation(): Task {
        return Task.where("The actor into prefix and reason of the note",
            BaseHelp.selectFromList(DebitNoteLocators.reasonNoteSelect(), this.data.INVOICE_TEST.reasonNote),
            BaseHelp.selectFromList(DebitNoteLocators.prefixNoteSelect(), this.data.INVOICE_TEST.prefixNote),
        )
    }


    /**
     * This function creates a debit note by adding a new product.
     * @returns The `createDebitNoteCreateNewProduct` method is returning a `Task` object that
     * represents a series of actions to create a debit note by adding a new product. The method
     * includes actions such as clicking on elements, entering values, clearing values, and waiting for
     * an element to be visible.
     */
    static createDebitNoteCreateNewProduct(): Task {

        return Task.where('The actor creates a debit note by adding a new product.',
            Click.on(DebitNoteLocators.addProductService()),
            BaseHelp.selectSearchList(DebitNoteLocators.skuProduct(), this.data.PRODUCTS.TEST_AMOUNT.sku),
            Enter.theValue(this.data.PRODUCTS.TEST_AMOUNT.description).into(DebitNoteLocators.descriptionProduct()),
            Clear.theValueOf(DebitNoteLocators.amountProduct()),
            Enter.theValue(this.data.PRODUCTS.TEST_AMOUNT.amount).into(DebitNoteLocators.amountProduct()),
            Click.on(DebitNoteLocators.saveButtonProduct()),
            Wait.upTo(Duration.ofMilliseconds(APP_CONSTANTS.TIMEOUT))
                .until(DebitNoteLocators.iconPopUpSaveNote(), isVisible())
        )
    }

}


