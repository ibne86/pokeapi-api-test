describe('Berry GET Request Test wtih Id', () => {
  beforeEach(() => {
    cy.fixture('berryIds').as('berryIds');
  });

  it('Validate GET request with valid Id', function() {
    cy.getBerry(this.berryIds.validBerryId).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.firmness).to.have.property('name', 'soft');
    });
  });

  it('Validate  GET request with invalid Id', function() {
    cy.getBerry(this.berryIds.invalidBerryId,false).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.contain("Not Found");
    });
  });
});
