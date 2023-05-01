describe('About', () => {
  it('should have text', () => {
    cy.visit('/about-us');
    cy.get('.about__us').contains('We are technical market.');
  });
});

export {};
