describe("These cases handle popups, alerts and tables", () => {
  // Getting rid of that annoying blinking text and saving searchbox as alias
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get(".blinkingText").invoke("css", "display", "none");
  });

  it("Clicking confirm alert", () => {
    cy.get("input[value='Confirm']").click();
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });
  });

  it("Handling child tabs", () => {
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.wait(2000);
    // Go back
    cy.go("back");
    cy.url().should("include", "AutomationPractice");
  });

  it("Handling tables, checking price of courses which are 20", () => {
    cy.get("table[name='courses'] tbody tr td:nth-child(2)").each((el) => {
      if (
        el.text() ===
          "WebSecurity Testing for Beginners-QA knowledge to next level" ||
        el.text() ===
          "Advanced Selenium Framework Pageobject, TestNG, Maven, Jenkins,C"
      ) {
        // selecting sibling td, which is the price
        //cy.wrap(el.siblings().eq(1).text()).should("equal", "20");

        // Better and simpler way to select only next sibling
        cy.wrap(el.next().text()).should("equal", "20");
      }
    });
  });

  it.only("Handle mouseover/hover", () => {
    cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Top").click();
    cy.url().should("contain", "top");
  });
});
