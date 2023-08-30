describe('recepten overzicht', () => {
  it('should show the prescription table ', () => {
    cy.visit('/');
    cy.get(`[data-test="prescription-table"]`).should('exist');
    cy.get(`[data-test="table-row"]`).contains('paracetemol').should('exist');
  })
})

context('open the add prescription dialog', () => {
  let rows = 0

  beforeEach(() => {
    cy.visit('/');
    cy.get(`[data-test="table-row"]`).then(tableRows => {
      cy.log(tableRows.length)
      rows = tableRows.length;
    })
    cy.get(`[data-test="add-prescription"]`).click();
    cy.get(`[data-test="dialog-title"]`).should('have.html', "Recept toevoegen")
  })

  it('should show an error message on submitting the form if the required fields are not filled', () => {
    cy.get(`[data-test="submit"]`).click();
    cy.get(`[data-test="form-error"]`).should('have.html', "Vul de verplichte velden in.")
  })

  it('should fill the form and post it on pressing submit', () => {
    cy.get(`[data-test="input-name"]`).type("Lisinopril");
    cy.get(`[data-test="input-description"]`).type("1 pil per week voor 4 weken");
    cy.get(`[data-test="input-quantity"]`).type("28");
    cy.get(`[data-test="select-unit"]`).click().get(`[data-test="select-option"]`).contains('stuks').click();

    cy.get(`[data-test="submit"]`).click();
    cy.wait(500);
    cy.get(`[data-test="table-row"]`).then(tableRows => {
      expect(tableRows.length).to.eq(rows + 1)
    })
  })
});
