describe("Testing Counter application", () => {
  it("should be able to visit the URL", () => {
    cy.visit("http://localhost:3000");
  });

  it("should have all the UI components", () => {
    cy.visit("http://localhost:3000");
    cy.get("h1").should("exist");
    cy.get("[data-testid=addBtn]").should("exist");
    cy.get("[data-testid=reduceBtn]").should("exist");
  });

  // it("should add 1, when clicked on the add button",()=>{
  //   cy.get('[data-testid="countVal"]').should('have.text','Counter: 10')
  //   cy.get('h1').should("exist")
  //   cy.get('[data-testid=addBtn]').should("exist")
  //   cy.get('[data-testid=reduceBtn]').should("exist")
  // })
});

// beforeAll, beforeEach, afterEach, afterAll
