import { calculateMaxPotency, filterBerriesByPotency } from "../support/utils";

describe("Berry Flavors Test with highest Potency", () => {
  it("Get the berry with the highest potency and verify its details", function () {
    cy.fixture("berryFlavor").then((berryFlavor) => {
      cy.getBerryFlavor(berryFlavor.flavor).as("response_berryFlavor");

      cy.get("@response_berryFlavor").then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('name', 'spicy');

        const maxValue = calculateMaxPotency(response.body.berries);
        const objs = filterBerriesByPotency(response.body.berries, maxValue);

        cy.getBerry(objs[0].berry.name).as("response_maxPotency");

        cy.get("@response_maxPotency").then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.have.property('name', 'enigma');
        });
      });
    });
  });
});
