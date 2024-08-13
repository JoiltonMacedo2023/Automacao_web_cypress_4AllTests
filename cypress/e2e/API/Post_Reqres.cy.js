/// <reference types="cypress" />

describe('Post Reqres', () => {

    it('Validar CREATE retornando 201', () => {

        const dados = {
            "name": "morpheus",
            "job": "leader"
        }

        cy.request({
            method: 'POST',
            url:'https://reqres.in/api/users',
            body: dados,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(201)
        })      
    })

    it('Validar REGISTER - SUCCESSFUL retornando 200', () => {

        const dados = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }

        cy.request({
            method: 'POST',
            url:'https://reqres.in/api/register',
            body: dados,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
            let retorno = response.body
            cy.log(JSON.stringify(retorno, null, 3))
            expect(retorno.token).to.eq('QpwL5tke4Pnpja7X4')
        })      
    })

    it('Validar REGISTER - UNSUCCESSFUL retornando 400', () => {

        const dados = {
            "email": "sydney@fife"
        }

        cy.request({
            method: 'POST',
            url:'https://reqres.in/api/register',
            body: dados,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)           
        })      
    })

    it('Validar LOGIN - SUCCESSFUL retornando 200', () => {

        const dados = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }

        cy.request({
            method: 'POST',
            url:'https://reqres.in/api/login',
            body: dados,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
            let retorno = response.body
            cy.log(JSON.stringify(retorno, null, 3))
            expect(retorno.token).to.eq('QpwL5tke4Pnpja7X4')
        })      
    })

    it('Validar LOGIN - UNSUCCESSFUL retornando 400', () => {

        const dados = {
            "email": "peter@klaven"
        }
        cy.request({
            method: 'POST',
            url:'https://reqres.in/api/login',
            body: dados,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)           
        })      
    })    
   
})    