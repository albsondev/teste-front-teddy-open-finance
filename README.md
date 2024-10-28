# Teddy-Teste Front End v3

Este projeto implementa um sistema de cadastro de parceiros integrados em nossas aplicações. Ele foi desenvolvido seguindo o conceito de micro front-ends, dividindo as funcionalidades em dois projetos separados: um em Angular 15 e outro em React.js.  Essa arquitetura permite que diferentes times trabalhem de forma independente em cada parte do sistema.

## Descrição do Sistema

O sistema permite cadastrar parceiros com suas informações, onde são utilizados e quais clientes são atendidos.  Ele se integra com duas APIs externas para persistir os dados.

## Tecnologias Utilizadas

* **Angular 15:**  Utilizado para o módulo principal do sistema (Login, Cadastro de Parceiros, Listagem de Parceiros, Sobre).
* **React.js:** Utilizado para o módulo de cadastro e listagem de empresas externas.
* **HTML5 & CSS3:**  Utilizados para a landing page inicial.
* **Docker:**  O projeto está preparado para ser executado em contêineres, facilitando o deploy em ambientes cloud como AWS ECS.

## APIs

O sistema consome as seguintes APIs:

* Parceiros: `https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners`
* Empresas Externas: `https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies`

Ambas as APIs possuem os seguintes endpoints:

* `GET /`: Listar todos
* `GET /:id`: Listar um por ID
* `POST /`: Cadastrar
* `PUT /:id`: Atualizar
* `DELETE /:id`: Deletar

## Funcionalidades

* **Login:**  Com opção de digitar usuário e senha. O login redireciona para a página inicial. Possui funcionalidade "Manter conectado" que salva o usuário em cookie (se marcado) ou local storage (se não marcado).
* **Cadastro de Parceiro:** Permite cadastrar novos parceiros.
* **Listagem de Parceiros:** Exibe os parceiros cadastrados em uma tabela com paginação e ações para editar/deletar.
* **Sobre a Aplicação:**  Página com informações sobre o projeto.
* **Sair:**  Redireciona para a página de login.
* **Cadastro de Empresa Externa:** Permite cadastrar novas empresas externas.
* **Listagem de Empresas Externas:** Exibe as empresas externas cadastradas em uma tabela com paginação e ações para editar/deletar.
* **Compartilhamento de Dados da Tabela:**  Mantém a página da tabela ao compartilhar o link, mesmo após o login.

## Rodando o Projeto

**Angular (http://localhost:5173/login):**

1. Navegue até a pasta do projeto Angular.
2. Execute `npm install` para instalar as dependências.
3. Execute `ng serve` para iniciar o servidor de desenvolvimento.

**React:**

1. Navegue até a pasta do projeto React.
2. Execute `npm install` para instalar as dependências.
3. Execute `npm start` para iniciar o servidor de desenvolvimento.

## Tarefas (TODO)

* **Testes Unitários:** Implementar testes unitários para ambos os projetos. (Estimativa: 16h)
* **Testes Automatizados:** Implementar testes automatizados de ponta a ponta. (Estimativa: 24h)
* **Deploy:**  Realizar deploy do projeto no GitHub Pages e Vercel. (Estimativa: 8h)
* **Vídeo:** Gravar um vídeo explicativo e publicar no YouTube. (Estimativa: 4h)

## Deploy

* **GitHub Pages:** [URL do deploy no GitHub Pages]
* **Vercel:** [URL do deploy no Vercel]

## Vídeo

[URL do vídeo no YouTube]
