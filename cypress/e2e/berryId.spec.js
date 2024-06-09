describe('Berry GET Request Test wtih Id', () => {
  beforeEach(() => {
    cy.fixture('berryIds').as('berryIds');
  });

  it('Validate GET request with valid Id', function() {
    cy.getBerry(this.berryIds.validBerryId).as("response");
    cy.get("@response").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.firmness).to.have.property('name', 'soft');
    });
  });

  it('Validate  GET request with invalid Id', function() {
    cy.getBerry(this.berryIds.invalidBerryId,false).as("response");
    cy.get("@response").then((response) => {
      expect(response.status).to.equal(404);
      expect(response.body).to.contain("Not Found");
    });
  });
});
