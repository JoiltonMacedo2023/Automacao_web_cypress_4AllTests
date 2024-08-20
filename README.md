# Automação Web e API com Cypress - Projeto 4AllTests

Este projeto utilizou o Cypress para automatizar testes web em alguns sites 4AllTests. O objetivo era validar funcionalidades das páginas de cadastro e login, garantindo que o sistema se comporte conforme esperado.

## Automação web :

## Requisitos

- Node.js e Cypress instalados.

## Executando os Testes

Use `npx cypress open` para rodar os testes no painel do Cypress.

Este projeto ilustrou como conceitos de automação foram aplicados para:

Cadastro na Comunidade 4AllTests: Automatizou o fluxo completo de cadastro de novos usuários, desde o preenchimento dos dados até a confirmação de sucesso.

Login Automatizado: Automatizou o processo de login, assegurando que usuários pudessem acessar suas contas com sucesso.

Validação da Página: Verificou se as páginas estavam carregando corretamente e se o conteúdo esperado estava presente.

## Páginas Testadas:

Cadastro: Automação do processo de registro de novos usuários.

Login: Automação do processo de login de usuários existentes.

Validação da Página: Verificação do carregamento e conteúdo das páginas.

Aqui está um resumo do README para a automação de testes de API com Cypress:

---

# Automação de Testes de API com Cypress

Este projeto automatizou testes na API pública [Reqres](https://reqres.in/) usando Cypress. Os testes cobrem cenários como listar usuários, buscar um usuário específico, verificar usuário inexistente, e testar respostas com delay. Foram utilizadas requisições GET, POST, PUT, PATCH e DELETE.

## Requisitos

- Node.js e Cypress instalados.

## Executando os Testes

Use `npx cypress open` para rodar os testes no painel do Cypress.

## Endpoints Testados

- **GET**: `/api/users?page=2`, `/api/users/2`, `/api/users/23`, `/api/users?delay=3`
- **POST, PUT, PATCH, DELETE**: `/api/users`

