describe("Test cases for learningn purposes on Verkkokauppa.com site", () => {
  it("Searching ps5 & adding it to cart, then proceeding to checkout", () => {
    cy.visit("https://www.verkkokauppa.com/");

    cy.get(".header__navigation").find("input").type("ps5");
    cy.wait(1000);
    cy.get(".header__navigation").find("button[aria-label='Hae']").click();
    cy.wait(1000);
    cy.get(".vk-cookie-notification").invoke("css", "display", "none");
    // Loop through list and click product which is avaialbe
    cy.get("ol>li")
      .eq(2)
      .find("button[aria-label='Lisää ostoskoriin']")
      .click();

    cy.contains("Siirry kassalle").click();

    // Annetaan syntymäpäivä
    cy.get("#dob-day").select("19.");
    cy.get("#dob-month").select("elokuuta");
    cy.get("#dob-year").select("1998");
    cy.wait(1000);

    cy.contains("Siirry kassalle").click();
  });
});
