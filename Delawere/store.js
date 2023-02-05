describe('Магазин мебели', function () {

    it('Позитивный тест на покупку товара', function () {
         cy.visit('https://testqastudio.me/');
         cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg');
         cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
         cy.get('.header-left-items > .site-branding').click();
         cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('.checkout').click();
         cy.get('#billing_first_name').type('Анастасия');
         cy.get('#billing_last_name').type('Зимина');
         cy.get('#billing_address_1').type('ул.Моставицкая д.15');
         cy.get('#billing_city').type('Киров');
         cy.get('#billing_state').type('Кировская');
         cy.get('#billing_postcode').type('610025');
         cy.get('#billing_phone').type('89125463215');
         cy.get('#billing_email').type('nast.zimina.1997@gmail.com');
         cy.get('#place_order').click();
         cy.contains('Ваш заказ принят. Благодарим вас.');    
     })
     })