import { fakerPT_BR as faker } from '@faker-js/faker';
const generator = require('cpf_and_cnpj-generator');

describe('Pagina Cadastro e Login', () => {

        let nome = faker.person.fullName();
        let email = faker.internet.email();        
        let cpf = generator.generateCpf();
        let senha = faker.internet.password();
        let confirmarSenha = senha;           

    it('Cadastro válido', () => {
        
        cy.visit('/comunidade/cadastro.php')
        cy.get('#nome').type(nome)
        cy.get('#email').type(email)
        cy.get('#whatsapp').type('99999-9999')
        cy.get('#cpf').type(cpf)
        cy.get('#senha').type(senha)
        cy.get('#confirmarSenha').type(confirmarSenha)
        cy.get('.iCheck-helper').click()
        cy.get('#verificar').click()
        cy.get('#CadastroValido > .modal-dialog > .modal-content > .modal-body')
       .should('contains.text','Cadastro salvo com sucesso!')
        cy.get('#CadastroValido > .modal-dialog > .modal-content > .modal-footer > .btn').click()       
    })

    it('Login realizado com sucesso', () => {
        
        cy.visit('/comunidade/pages/login.php')
        cy.get(':nth-child(1) > .form-control').type(Cypress.env('email'))
        cy.get(':nth-child(2) > .form-control').type(Cypress.env('senha'))
        cy.get('#solicitarLogin').click()
        cy.url('/comunidade/pages/home.php')
               
        cy.get(':nth-child(8) > a').click()
        cy.url('/comunidade/pages/login.php')
    })           
})