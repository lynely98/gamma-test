//state, action, assertion
describe('Product Page', () => {
  it('Loads product page', () => {
    cy.viewport('macbook-15');
    cy.visit('https://gamma-tabspace.myshopify.com/password?password=ahsher');
    cy.visit(
      'https://gamma-tabspace.myshopify.com/products/linkcart-limited-tee',
    );
    cy.url().should('include', '/products/');
    cy.get('[aria-label="add to cart"]').should($addToCart => {
      expect($addToCart).to.have.length(1);
    });
  });
  it('Adds product to cart', () => {
    cy.viewport('macbook-15');
    cy.get('[aria-label="add to cart"]').click();
  });
});
