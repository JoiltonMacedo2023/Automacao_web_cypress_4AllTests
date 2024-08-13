describe('Menu 4All Tests', () => {
  it('Validar acesso a pagina Home', () => {
    cy.visit('https://4alltests.com.br')
  })

  it('Validar acesso a pagina Ferramentas ', () => {
    cy.visit('https://4alltests.com.br')
    cy.get('#nav > :nth-child(1) > :nth-child(2) > :nth-child(1)').click()
    
    cy.contains('Ferramentas 4ALLTests').click({ force: true })
    cy.contains('Teste sua API').click({ force: true })
    cy.url('/testeapis/')

  })

  it('Validar acesso a pagina Eventos', () => {
    cy.visit('https://4alltests.com.br')
    cy.get('#nav > :nth-child(1) > :nth-child(3) > a').click()      
  })

  it('Validar acesso a pagina Vagas', () => {
    cy.visit('https://4alltests.com.br')
    cy.get('#nav > :nth-child(1) > :nth-child(4) > a').click() 
  })

  it('Validar acesso a pagina Comunidades', () => {
    cy.visit('https://4alltests.com.br')
    cy.get('#nav > :nth-child(1) > :nth-child(5) > a').click()
  })

  it('Validar acesso a pagina Cursos', () => {
    cy.visit('https://4alltests.com.br')
    cy.get(':nth-child(6) > a').click()
  })

  it('Validar acesso a pagina Referências', () => {
    cy.visit('https://4alltests.com.br')
    cy.get(':nth-child(7) > a').click()
  })   
})
