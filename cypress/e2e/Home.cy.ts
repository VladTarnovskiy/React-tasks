describe('Home', () => {
  it('should have change page', () => {
    cy.visit('/');
    cy.get('.pagination-page__control-right').click();
    cy.get('.pagination-page__counter').contains('2');
  });
});

export {};
