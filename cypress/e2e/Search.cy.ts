describe('Search bar test', () => {
  it('search works', () => {
    cy.visit('/');
    cy.get('.products__search').type('nature{enter}');
    cy.get('.products__search').should('have.value', 'naturenature');
  });
});
