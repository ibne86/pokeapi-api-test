describe("Berry GET Request Test wtih Name", () => {
  beforeEach(() => {
    cy.fixture("berryNames").as("berryNames");
  });

  it("Validate GET request with valid name", function () {
    cy.getBerry(this.berryNames.validBerryName).as("response");
      cy.get("@response").then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.firmness).to.have.property('name', 'super-hard');
    });
  });

  it("Validate GET request with invalid name", function () {
    cy.getBerry(this.berryNames.invalidBerryName, false).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.contain("Not Found");
    });
  });
});
