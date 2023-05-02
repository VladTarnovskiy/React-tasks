describe('Nav bar test', () => {
  it('click nav links', () => {
    cy.visit('/');
    cy.contains('Go Home').click();
    cy.contains('About Us').click();
    cy.contains('Form').click();
  });
});
