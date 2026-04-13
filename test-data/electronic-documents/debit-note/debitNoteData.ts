import { IDebitNoteData, IMessages } from "../../../src/screenplay/interface/electronic-documents/debit-note/debit-note-interface"

export const DATA_DEBIT_NOTE: IDebitNoteData = {
    INVOICE_TEST: {
        numberInvoice: "",
        prefixInvoice: "",
        reasonNote: "Cambio del valor",
        prefixNote: ""
    },

    PRODUCTS: {
        TEST_AMOUNT: {
            sku: "",
            description: "Nota con pruebas automatizadas",
            amount: "4"
        }
    }
}



export const MESSAGE: IMessages = {
    SUCCESS: {
        DEBIT_NOTE_CREATED: '¡Su información ha sido guardada con éxito!',
    },

    ERROR: {
        DEBIT_NOTE_CREATED: '--',
    },
}