describe('Reservation Scenario', () => {
  beforeEach(() => {
    cy.visit('localhost:5173/reserve');
  });

  it('Input should appear', () => {
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="date"]').should('be.visible');
    cy.get('input[name="time"]').should('be.visible');
    cy.get('input[name="adult"]').should('be.visible');
    cy.get('input[name="children"]').should('be.visible');
    cy.get('input[name="phoneNumber"]').should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('textarea[name="specialRequest"]').should('be.visible');
    cy.get('[data-testid="reserve"]').should('be.visible');
  });

  it('Input gives an error when blank input', () => {
    cy.get('[data-testid="reserve"]').click();

    cy.contains('Name is required');
    cy.contains('Date is required');
    cy.contains('Time is required');
    cy.contains('Adult is required');
    cy.contains('Phone number is required');
    cy.contains('Email is required');
  });

  it('Reserve success', () => {
    cy.get('input[name="name"]').type('tesname');
    cy.get('input[name="date"]').type('2023-01-01');
    cy.get('input[name="time"]').type('23:11');
    cy.get('input[name="adult"]').type('2');
    cy.get('input[name="children"]').type('1');
    cy.get('input[name="phoneNumber"]').type('12345678');
    cy.get('input[name="email"]').type('tesmail@gmail.com');
    cy.get('textarea[name="specialRequest"]').type('specialrequest testing');
    cy.get('[data-testid="reserve"]')
      .click()
      .then(() => {
        cy.get('[data-testid="spinner"]').should('be.visible');
        cy.wait(1000);
        cy.on('window:alert', (t) => {
          expect(t).to.contains('Thank you for your reservation, tesname! Kindly check your email for the reservation details.');})
      });
  });
});
