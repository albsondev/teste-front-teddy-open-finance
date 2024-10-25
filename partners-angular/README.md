# Projeto Angular: Gestão de Parceiros

Este projeto é uma aplicação Angular desenvolvida para gerenciar parceiros, permitindo cadastro, listagem, edição e exclusão de parceiros.

## Tecnologias Utilizadas

- Angular 15
- Angular Material
- TypeScript
- Nginx (para servir a aplicação em produção)
- Docker

## Pré-requisitos

- Node.js e npm instalados
- Docker Desktop instalado e rodando

## Como Rodar o Projeto Localmente

1. **Clone o Repositório**: Clone o repositório para sua máquina local.

   ```
   git clone https://github.com/albsondev/teste-front-teddy-open-finance.git
   cd seu-repositorio/partners-angular
   ```

2. **Instale as Dependências:**: Execute o comando abaixo para instalar as dependências do projeto.
    ```
    npm install
    ```

3. **Rode o Projeto:**: Para rodar o projeto em modo de desenvolvimento, execute:

    ```
    ng serve
    ```

    #### A aplicação estará disponível em **http://localhost:4200**.

## Como Rodar o Projeto com Docker
### 1) Construir o Contêiner Docker
Certifique-se de estar no diretório do projeto Angular e execute o comando abaixo para construir o contêiner Docker:

```
    docker build -t partners-angular .
```

### 2) Executar o Contêiner Docker
Execute o contêiner com o seguinte comando:

```
docker run -p 4200:80 partners-angular
```
#### A aplicação estará disponível em http://localhost:4200

### Estrutura de Diretórios

- ```src/app```: Contém os componentes, serviços, e módulos Angular.

- ```src/assets```: Contém ativos estáticos como imagens e estilos globais.

- ```src/environments```: Configurações de ambiente para desenvolvimento e produção.

### Funcionalidades

- **Login:** Tela de login com opção de manter conectado.

- **Dashboard:** Listagem de parceiros com opções de editar e deletar.

- **Cadastro de Parceiro:** Formulário para adicionar novos parceiros.

- **Sobre:** Página informativa sobre o projeto.

## Contato
Para mais informações, entre em contato comigo através do e-mail [albsondev@outlook.com](mailto:albsondev@outlook.com).