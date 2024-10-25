# Projeto React: Gestão de Empresas Externas

Este projeto é uma aplicação React desenvolvida para gerenciar empresas externas, incluindo funcionalidades de cadastro, listagem e exclusão.

## Tecnologias Utilizadas

- React com TypeScript
- Vite
- Axios (para chamadas de API)
- Sass (SCSS)
- Docker

## Pré-requisitos

- Node.js e npm instalados
- Docker Desktop instalado e rodando

## Como Rodar o Projeto Localmente

1. **Clone o Repositório**: Clone o repositório para sua máquina local.

   ```bash
   git clone https://github.com/albsondev/teste-front-teddy-open-finance.git
   cd teste-front-teddy-open-finance/partners-react
   ```

2. **Instale as Dependências:** Execute o comando abaixo para instalar as dependências do projeto.

```
npm install
```

3. **Rode o Projeto:** Para rodar o projeto em modo de desenvolvimento, execute:

```
npm run dev
```

O projeto estará disponível em http://localhost:3000.

## Como Rodar o Projeto com Docker
### 1) Construir o Contêiner Docker
Certifique-se de estar no diretório do projeto Angular e execute o comando abaixo para construir o contêiner Docker:

```
docker build -t partners-react .
```

### 2) Executar o Contêiner Docker
Execute o contêiner com o seguinte comando:

```
docker run -p 3000:80 partners-react
```
#### A aplicação estará disponível em http://localhost:3000/


## Estrutura de Diretórios

- ```src/components:``` Contém os componentes React, organizados por funcionalidade.

- ```src/services:``` Funções de API e lógica de negócios.

- ```src/styles:``` Estilos globais e variáveis SCSS.

- ```src/types:``` Definições de tipos TypeScript.

## Funcionalidades

- **Cadastro de Empresas:** Formulário para adicionar novas empresas externas.

- **Listagem de Empresas:** Tabela com paginação e opções de deletar.

- **Integração com API:** Uso de Axios para operações CRUD.

## Contato
Para mais informações, entre em contato comigo através do e-mail [albsondev@outlook.com](mailto:albsondev@outlook.com).