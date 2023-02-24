describe("First test cases", () => {
  // Getting rid of that annoying blinking text and saving searchbox as alias
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".blinkingText").invoke("css", "display", "none");
    cy.get(".search-keyword").as("Searchbox");
  });

  it("Searching cucumber from search box should return one value", () => {
    cy.get("@Searchbox").type("cucumber");

    cy.get(".products").children().should("have.length", 1);
  });

  it("Checkout button should not be active without cart items", () => {
    cy.get(".cart-icon").click();
    cy.get(".cart-preview.active")
      .find(".action-block > button")
      .should("have.class", "disabled");
  });

  it.only("Search & add to cart, then proceed to check out", () => {
    cy.get("@Searchbox").type("ca");

    // Getting second item on the list
    cy.get(".products").find(".product").eq(2).find("button").click();
    // Getting item with name
    cy.contains("Carrot - 1 Kg").parent().find("button").click();
    // Selecting item with iteration
    cy.get(".products")
      .find(".product")
      .each((el) => {
        const currProductName = el.find("h4.product-name").text();
        if (currProductName.includes("Cashews")) {
          cy.wrap(el).find("button").click();
        }
      });

    cy.get(".cart-icon").click();
    cy.get(".cart-preview.active")
      .find(".action-block > button")
      .should("not.have.class", "disabled");

    cy.get(".cart-preview.active").find(".action-block > button").click();

    cy.contains("Place Order").click();
  });
});
