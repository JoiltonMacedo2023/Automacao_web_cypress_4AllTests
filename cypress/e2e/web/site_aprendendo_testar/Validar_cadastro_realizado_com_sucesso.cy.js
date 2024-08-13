import { fakerPT_BR as faker } from '@faker-js/faker';

describe('Pagina Automação', () => {
           
    let usuario = faker.internet.email();
    let senha = faker.internet.password();
    let nome = faker.person.fullName();

    it('Validar Cadastro com sucesso', () => {
        
        cy.visit('http://www.aprendendotestar.com.br/treinar-automacao.php');
        cy.get(':nth-child(2) > td > input').type(usuario);
        cy.get(':nth-child(4) > td > input').type(senha);
        cy.get(':nth-child(6) > td > input').type(nome);
        cy.get('td > .btn').click();    
    });

    it('Testar cadastro com crendencias vazias - Usuário em branco', () => {
        cy.visit('http://www.aprendendotestar.com.br/treinar-automacao.php');
        
        cy.get(':nth-child(4) > td > input').type(senha);
        cy.get(':nth-child(6) > td > input').type(nome);
        cy.get('td > .btn').click(); 
        cy.get('input[name="form_usuario"]').should('have.attr', 'required')        
    });

    it('Testar cadastro com crendencias vazias - Senha em branco', () =>  {
        
        cy.visit('http://www.aprendendotestar.com.br/treinar-automacao.php');
        cy.get(':nth-child(2) > td > input').type(usuario);
        cy.get(':nth-child(6) > td > input').type(nome);
        cy.get('td > .btn').click();
        cy.get('input[name="form_senha"]').should('have.attr', 'required');
        
        cy.get('input[name="form_senha"]').then($input => {
            const validationMessage = $input[0].validationMessage;
            expect(validationMessage).to.equal('Preencha este campo.');
        }); 
    });

    it('Testar cadastro com crendencias vazias - Nome em branco', () =>  {
        
        cy.visit('http://www.aprendendotestar.com.br/treinar-automacao.php');
        cy.get(':nth-child(2) > td > input').type(usuario);
        cy.get(':nth-child(4) > td > input').type(senha);
        cy.get('td > .btn').click();           
       cy.get('form > table > tbody > :nth-child(7) > td')
       .should('contain.text', 'Existem campos em branco.');
    });

});