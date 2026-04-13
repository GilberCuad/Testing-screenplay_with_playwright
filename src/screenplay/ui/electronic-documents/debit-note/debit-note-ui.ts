import { By, PageElement } from '@serenity-js/web';

/**
 * DebitNoteLocators: Lean Page Object Pattern
 * The `DebitNoteLocators` class contains static readonly properties representing login button, next button,
username field, and password field elements on a web page.
 */

export class DebitNoteLocators {
    static readonly intoModuleElectronicDocuments = () =>
        PageElement.located(By.id("dp-operation-table-span-dp-electronic-invoice-sidebar-info-rdo"))
            .describedAs("Locator for the billing module from the sidebar")

    static readonly intoDebitNoteScreen = () =>
        PageElement.located(By.id("dp-operation-table-span-dp-electronic-invoice-cdcn-info-rdo"))
            .describedAs('Screen locator create debit/credit note');

    static readonly searchInvoice = () =>
        PageElement.located(By.id("dp-electronic-invoice-cancellation-document-search-input-drp"))
            .describedAs('Input locator to select the invoice');

    static readonly buttonDebitNoteTheInvoice = (prefixInvoice: string, numberInvoice: string) =>
        PageElement.located(By.id(`dp-electronic-invoice-cdcn-debit-note-button-${prefixInvoice}${numberInvoice}`))
            .describedAs('Location for debit note button referring to the invoice');

    static readonly reasonNoteSelect = () =>
        PageElement.located(By.id("dp-electronic-invoice-electronic-note-form-document-notes-rejection-motives-input-drp"))
            .describedAs('Locator for selecting the reason for the note');

    static readonly prefixNoteSelect = () =>
        PageElement.located(By.id("dp-electronic-invoice-electronic-note-form-document-prefix-notes-input-drp"))
            .describedAs('Locator for note prefix selection');

    static readonly addProductService = () =>
        PageElement.located(By.id("dp-electronic-invoice-electronic-note-form-notes-product-service-add-lnk"))
            .describedAs('URL locator for adding a product/service');

    static readonly skuProduct = () =>
        PageElement.located(By.css('td[class*="w-32"] input[aria-autocomplete="list"]'))
            .describedAs('Locator to add product SKU');

    static readonly descriptionProduct = () =>
        PageElement.located(By.id("dp-electronic-invoice-electronic-note-form-description-1-input-txt"))
            .describedAs('Locator to add the product description');

    static readonly amountProduct = () =>
        PageElement.located(By.id('dp-electronic-invoice-electronic-note-form-quantity-1-input-txt'))
            .describedAs('Locator to add the quantity of the product');

    static readonly saveButtonProduct = () =>
        PageElement.located(By.id("dp-buttons-electronic-invoice-visualization-notes-right-button-custom-action-btn"))
            .describedAs('Button locator for saving the note');


    static readonly iconPopUpSaveNote = () =>
        PageElement.located(By.id("dp-electronic-invoice-modals-visualization-notes-save-info-info-mdl-modal-type-accept-ico"))
            .describedAs('Locator to verify the saved note pop-up icon');


    static readonly acceptPopUpButton = () =>
        PageElement.located(By.id("dp-electronic-invoice-modals-visualization-notes-save-info-info-mdl-modal-type-main-action-info-btn"))
            .describedAs('Accept button locator for saved information popup');

    static readonly messsageSuccefullyPopUp = () => 
        PageElement.located(By.css("#dp-electronic-invoice-modals-visualization-notes-save-info-info-mdl > div > div.text-base.font-normal.leading-base.text-gray-dark > div > p:nth-child(1)"))
            .describedAs("pop-up message locator")
    
}

