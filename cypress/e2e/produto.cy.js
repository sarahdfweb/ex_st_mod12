/// <reference types="cypress"/>
import produtosPage from "../support/page-objects/produtos.page";
var faker = require('faker');

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
        
    });
    
 
        it.only('Deve adicionar um produto ao carrinho', () => {
            var quantidade = 4
            
            cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
            cy.get('.button-variable-item-S').click()
            cy.get('.button-variable-item-Green').click()
            cy.get('.input-text').clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click()
            cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
            cy.get('.woocommerce-message').should('exist' , quantidade + ' 4 × “Abominable Hoodie” foram adicionados no seu carrinho. ')
            cy.get('.woocommerce-message > .button').click();
            cy.get('.checkout-button').click();
            cy.get('.page-title').click();
            //cy.get('.page-title').should('contain', 'CHECKOUT').wait(1000);

            //let nomeFaker = faker.name.firstName()
            //let sobrenomeFaker = faker.name.lastName()
            //let emailFaker = faker.internet.email()
            cy.get('#billing_first_name').type('sarah');
            cy.get('#billing_last_name').type('maria');
            cy.get('#select2-billing_country-container').click().type('Brasil').click();
            cy.get('#billing_address_1').type(faker.address.streetAddress());
            cy.get('#billing_city').type(faker.address.city());
            cy.get('#select2-billing_state-container').click().type('São Paulo').type('{enter}');
            //cy.get('#billing_postcode').type(faker.address.zipCode());
            //cy.get('#billing_phone').type(faker.phone.phoneNumber());
            //cy.get('#billing_email').type(faker.internet.email());
            //cy.get('#createaccount').click();
            cy.get('#payment_method_cod').click();
            cy.get('#terms').click();
            // cy.get('#place_order').click();

           
            
        });
        
    });





       



