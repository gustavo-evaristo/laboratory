# Acesso as rotas

- Na raiz do projeto está o arquivo insomnia.json que contem todas os endpoints da alpicação.
- O arquivo endpoints.md é um explicativo de cada request.

# Deploy

- Aplicação hospedada em um Container na heroku. O deploy é feito de maneira automatica através das actions do Github.

# Tecnologias utilizadas
  - Express.js
  - TypeScript
  - TypeORM
  - PostgresSQL
  - Jest
  - Docker

# Estrutura do projeto
  ## /.github/worflows
  - Configurações das actions do github.
  - Develop: checagem do codigo e erros de sintaxe
  - Master: checagem do codigo, erros de sintaxe e deploy do container Docker na heroku.

  ## /src
  - Pasta que contém todos os arquivos, classes, servicos e arquivos da aplicação.

  ## /database - ormconfig.json
  - Arquivos de configurações do banco de dados.

    ## /migrations
    - Tabelas da aplicação.

  ## /entities
  - Camada que controla a ligação com as tabelas do banco de dados da aplicação.


  ## /repositories
  - Responsável por separar as operações de criação, alteração, atualização e exclusão de cada entidade.

  ## /useCase
  - Casos de uso da aplicação

    ## /services
    - Contém todos os serviços da aplicação, como por exemplo criação e busca de exames / laboratorioes.

    ## /controllers
    - Camada responsável por tratar a interação recebida pelo Frontend e realizar conexão com a camada Model.

  ## /routes
  - Cria os Endpoints da aplicação.

  ## /build
  - Arquivos compilados do TypeScript para javaScript

  ## Dockerfile
  - Container da aplicacao
