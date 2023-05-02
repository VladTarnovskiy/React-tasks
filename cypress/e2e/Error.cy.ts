describe('Error page tests', () => {
  it('get error page ', () => {
    cy.visit('/stifler');
    cy.contains('The page you are looking for not found!');
  });
});
