export interface IInvoiceTest {
    numberInvoice: string;
    prefixInvoice: string,
    reasonNote: string;
    prefixNote: string;
}

export interface IProductTestAmount {
    sku: string;
    description: string;
    amount: string;
}

export interface IProducts {
    TEST_AMOUNT: IProductTestAmount;
}

export interface IDebitNoteData {
    INVOICE_TEST: IInvoiceTest;
    PRODUCTS: IProducts;
}

export interface IMessages {
    SUCCESS: {
        DEBIT_NOTE_CREATED: string;
    };
    ERROR: {
        DEBIT_NOTE_CREATED: string;
    };
}
