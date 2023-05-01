describe('e2e tests', () => {
  it('form get data', () => {
    cy.visit('/form');
    cy.get('[data-testid="input-name"]').type('Name');
    cy.get('[data-testid="input-date"]').type('2022-02-22');
    cy.get('[data-testid="input-country"]').type('Belarus');
    cy.get('[data-testid="input-vehicle-car"]').click();
    cy.get('[data-testid="input-vehicle-motorcycle"]').click();
    cy.get('[data-testid="input-vehicle-bike"]').click();
    cy.get('[data-testid="input-gender"]').click();
    cy.get('[data-testid="input-file"]').selectFile('src/assets/icon.png');
    cy.get('[data-testid="input-rule"]').click();
    cy.get('[data-testid="submit"]').click();
  });
});
