# Acesso as rotas

- Na raiz do projeto está o arquivo insomnia.json que contem todas os endpoints da alpicação.
- O arquivo endpoints.md é um explicativo de cada request.

# Tecnologias utilizadas
  - Express.js
  - TypeScript
  - TypeORM
  - PostgresSQL
  - Jest
  - Docker

# Estrutura do projeto
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
