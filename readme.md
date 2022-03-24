# API da Aplicação Laboratory

# URL da API
  https://laboratory-api-node.herokuapp.com


## Consultar Exame por nome

```
    METODO: POST
    ENDPOINT: /exam/search

    {
        "name": "nome do exame"
    }
```

## Listar Exames

```
    METODO: GET
    ENDPOINT: /exam/list
```

## Criar Exame

```
    METODO: POST
    ENDPOINT: /exams/create

    {
        "name": "nome do exame",
        "type": "tipo do exame"

    }
```

## Atualizar Exame

```
    METODO: PUT
    ENDPOINT: /exams/create

    {
        "id": 1,
        "values": {
            "name": "nome do exame",
            "type": "tipo do exame",
            "status": "ACTIVE",
        }

    }

  - Consultar Exames - Metodo GET, Url: https://laboratory-api-node.herokuapp.com/exams/list
  - Cadastrar Exames - Metodo GET, Url: https://laboratory-api-node.herokuapp.com/exams/create
  - Criar livros - Metodo POST, Url: https://koobjob-library.herokuapp.com/

# Tecnologias utilizadas
  - Express.js
  - TypeScript
  - TypeORM
  - MySQL (Hospedado Na plataforma heroku, clearDb)
  - UUID
  - Cors
  - Git
  - Eslint
  - Prettier

# Estrutura do projeto
  # /src
  - Pasta que contém todos os arquivos, classes e códigos do programa.

  # /database - ormconfig.json
  - Arquivos de configurações do banco de dados.
    # /migrations
    - Processo de criação/atualização/exclusão de dados da aplicação.

  # /models
  - Camada que controla a ligação com o banco de dados da aplicação.
    # /entities
    - Objeto que faz referencia a determinado conceito da base de dados da aplicação .

  # /repositories
  - Responsável por separar as operações de criação, alteração, atualização e exclusão de cada entidade.

  # /services
  - Contém todos os serviços da aplicação, como por exemplo criação e busca de livros.

  # /controllers
  - Camada responsável por tratar a interação recebida pelo Frontend e realizar conexão com a camada Model.

  # routes.ts
  - Cria os Endpoints da aplicação.

  # /Dist
  - Arquivos compilados do TypeScript

  # tsconfig.json
  - Arquivo de configuração do TypeScript

  # eslintrc.json
  - Arquivo de configuração do Eslint

  # Procfile
   - Arquivo de configuração do Heroku
