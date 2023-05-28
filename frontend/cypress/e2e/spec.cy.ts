const baseUrl = "http://localhost:3000";

describe("Add new plant", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("should open the app", () => {
    cy.contains("IET HF Plant Tracker");
  });

  it("should open a modal for adding a new plant", () => {
    cy.get("#root > div > div > button").click();

    cy.contains("Add new plant");
  });
});
