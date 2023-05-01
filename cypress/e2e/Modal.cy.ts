describe('e2e tests', () => {
  it('modal window open', () => {
    cy.visit('/');
    cy.contains('Created at:').click();
    cy.contains('Description:');
    cy.get('.closer').click();
  });
});
