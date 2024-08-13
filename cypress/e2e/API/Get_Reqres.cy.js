/// <reference types="cypress" />

describe('Get Reqres', () => {

    it('Validar LIST USERS retornando 200', () => {

        cy.request({
            method: 'GET',
            url:'https://reqres.in/api/users?page=2',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
        })      
    })

    it('Validar body retornando no LIST USERS', () => {

        cy.request({
            method: 'GET',
            url:'https://reqres.in/api/users?page=2',
            failOnStatusCode: false     
        }).then((response) => {
            let retorno = response.body
            cy.log(JSON.stringify(retorno, null, 3))
        })      
    })

    it('Validar SINGLE USER retornando 200', () => {

        cy.request({
            method: 'GET',
            url:'https://reqres.in/api/users/2',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
        })      
    })

    it('Validar body retornando no SINGLE USER', () => {

        cy.request({
            method: 'GET',
            url:'https://reqres.in/api/users/2', 
            failOnStatusCode: false     
        }).then((response) => {
            let retorno = response.body
            cy.log(JSON.stringify(retorno, null, 3))
        })      
    })

   it('Validar SINGLE USER NOT FOUND retornando 404', () => {

        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/23',
            failOnStatusCode: false
        }).then  ((response)  => {
            expect(response.status).to.eq(404)
        })  
    }) 

    it('Validar DELAYED RESPONSE retornando 200', () => {

        cy.request({
            method: 'GET',
            url:'https://reqres.in/api/users?delay=3', 
            failOnStatusCode: false     
        }).then((response) => {
            let retorno = response.body
            cy.log(JSON.stringify(retorno, null, 3))
        })      
    })
    
})    