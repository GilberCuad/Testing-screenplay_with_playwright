Feature: create debit note on electronic documents
    as a diggi pymes user
    i want to join diggi pymes
    to create a new debit note

    Background: Access debit note creation screen
        Given Tester is on the debit or credit note creation screen
        When he selects a debit note from an electronic invoice
        And he enter the reason for the note and a valid prefix

    @DEBIT-NOTE_ADD_PRODUCT
    Scenario: Create a debit note by adding a new product
        When he add a product or service to the table and save the note
        Then he verifies that the note was successfully created