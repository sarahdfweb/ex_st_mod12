/// <reference types="cypress" />



var faker = require('faker');
const perfil = require('../fixtures/perfil.json');

describe('Funcionalidade Login ', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta');
    });

    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
        cy.get('#username').type(perfil.usuario);
        cy.get('#password').type(perfil.senha);
        cy.get('.woocommerce-form > .button').click();

        cy.get('.page-title').should('exist', 'minha conta').wait(1000);
        cy.get('#primary-menu > .menu-item-629 > a').click();
    });
})