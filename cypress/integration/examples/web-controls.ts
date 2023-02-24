describe("Test cases for handling different kind of web controls", () => {
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get(".blinkingText").invoke("css", "display", "none");
  });

  it("Handling checkboxes", () => {
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");

    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    // Select multiple checboxes and check boxes with certain values met
    cy.get("input[type='checkbox']").check(["option1", "option3"]);
  });

  it("Handling static dropdowns", () => {
    cy.get("select").select("Option2").should("have.value", "option2");
  });

  it("Handling dynamic dropdowns", () => {
    cy.get("#autocomplete").type("ge");
    cy.get(".ui-menu-item div").each((el) => {
      if (el.text() === "Germany") {
        cy.wrap(el).click();
      }
    });
    cy.get("#autocomplete").should("have.value", "Germany");
  });

  it.only("Handling visible and invisible elements", () => {
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
  });
});
