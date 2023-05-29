const baseUrl = "http://localhost:3000";

describe("Smoketests", () => {
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

describe("Creating, watering and deleting plants", () => {
  const plantName = "Huba, a növény";

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("should create a plant correctly", () => {
    cy.get("#root > div > div > button").click();
    cy.contains("Add new plant");
    cy.get('[data-testid="plantNameInput"]').type(plantName);
    cy.get('[data-testid="plantWateringInput"]').type("10");
    cy.get('[data-testid="plantSubmitButton"]').click();
    cy.contains(plantName);
  });

  it("should water a plant correctly", () => {
    cy.get("#root > div > div > div > div:last-child")
      .should("be.visible")
      .click();

    const lastWateredLabelSelector =
      "#root > div > div > div > div > div > div:nth-child(3) > div";

    cy.get(lastWateredLabelSelector).should("have.text", "Never");

    cy.get('[data-testid="waterPlantButton"]').should("be.visible").click();

    cy.get(lastWateredLabelSelector).should("have.text", "in a few seconds");
  });

  it("should delete a plant correctly", () => {
    cy.get("#root > div > div > div > div:last-child > div > p").should(
      "be.visible"
    );

    cy.get("#root > div > div > div > div:last-child > div > svg").click();

    const deleteButton = cy.get('[data-testid="deletePlantModalButton"]');

    deleteButton.should("be.visible");

    deleteButton.click();

    cy.get("#root > div > div > div").should("not.contain.html", plantName);
  });
});
