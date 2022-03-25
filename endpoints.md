# API da Aplicação Laboratory

# URL da API
  https://laboratory-api-node.herokuapp.com


# Endpoints para exame


## Consultar Exame por nome

```
    METODO: POST
    ENDPOINT: /exam/search

    {
        "name": "nome do exame"
    }

    Retorna uma lista de exames ativos pelo nome desejado.
```

## Listar Exames

```
    METODO: GET
    ENDPOINT: /exam/list

    Retorna a lista de todos os exames ativos.
```

## Criar Exame

```
    METODO: POST
    ENDPOINT: /exams/create

    {
        "name": "nome do exame",
        "type": "tipo do exame"

    }

    Retorna os dados do exame criado
```

## Criar Exame em Lote

```
    METODO: POST
    ENDPOINT: /exams/create-in-batch

    {
        "exams": [
            {
                "name": "nome do exame",
                "type": "tipo do exame"
            },
            {
                "name": "nome do exame",
                "type": "tipo do exame"
            },
            {
                "name": "nome do exame",
                "type": "tipo do exame"
            },
        ]
    }

    Retorna uma mensagem de sucesso na cricao dos exames
```

## Atualizar Exame

```
    METODO: PUT
    ENDPOINT: /exams/update

    {
        "id": 1,
        "values": {
            "name": "nome do exame",
            "type": "tipo do exame",
            "status": "ACTIVE",
        }
    }

    Retorna uma mensagem de sucesso na atualizacao do exame
```

## Atualizar Exame em lote

```
    METODO: PUT
    ENDPOINT: /exams/update-in-batch

    {
        "exams": [
            {
                "id": 1,
                "values": {
                    "name": "nome do exame",
                    "type": "tipo do exame",
                    "status": "ACTIVE",
                }
            },
            {
                "id": 1,
                "values": {
                    "name": "nome do exame",
                    "type": "tipo do exame",
                    "status": "ACTIVE",
                }
            }
        ]
    }

    Retorna uma mensagem de sucesso na atualizacao dos exames
```

## Remover Exame

```
    METODO: DELETE
    ENDPOINT: /exams/delete

    {
        "id": 1,
    }

    Retorna uma mensagem de sucesso na remoção do exame
```

## Remover Exame em lote

```
    METODO: DELETE
    ENDPOINT: /exams/delete-in-batch

    {
        "exams": [1, 2, 3],
    }

     Retorna uma mensagem de sucesso na remoção dos exames
```

# Endpoints para laboratorios

## Consultar laboratorios

```
    METODO: GET
    ENDPOINT: /laboratory/list

    Retorna a lista de todos os laboratorios ativos
```

## Criar laboratorio

```
    METODO: POST
    ENDPOINT: /laboratory/create

    {
        "name": "Nome do laboratorio",
        "address": "Endereco do laboratorio"
    }

    Retorna os dados do laboratorio criado
```

## Criar laboratorio em lote

```
    METODO: POST
    ENDPOINT: /laboratory/create-in-batch

    {
        "laboratories": [
            {
                "name": "Nome do laboratorio",
                "address": "Endereco do laboratorio"
            },
            {
                "name": "Nome do laboratorio",
                "address": "Endereco do laboratorio"
            }
        ]
    }

    Retorna uma mensagem de sucesso na criacao dos laboratorios

```

## Atualizar laboratorio

```
    METODO: PUT
    ENDPOINT: /laboratory/update

    {
        "id": 1,
        "values": {
            "name": "Nome do laboratorio",
            "address": "Endereco do laboratorio",
            "status": "ACTIVE"
        }
    }

    Retorna uma mensagem de sucesso na atualizacao do laboratorio
```

## Atualizar laboratorio em lote

```
    METODO: PUT
    ENDPOINT: /laboratory/update-in-batch

    {
        "laboratories: [
            {
                "id": 1,
                "values": {
                    "name": "Nome do laboratorio",
                    "address": "Endereco do laboratorio",
                    "status": "ACTIVE"
                }
            },
            {
                "id": 2,
                "values": {
                    "name": "Nome do laboratorio",
                    "address": "Endereco do laboratorio",
                    "status": "ACTIVE"
                }
            },
            {
                "id": 3,
                "values": {
                    "name": "Nome do laboratorio",
                    "address": "Endereco do laboratorio",
                    "status": "ACTIVE"
                }
            },
        ]
    }

    Retorna uma mensagem de sucesso na atualizacao dos laboratorios
```

## Deletar laboratorio

```
    METODO: DELETE
    ENDPOINT: /laboratory/delete

    {
        "id": 1,
    }

    Retorna uma mensagem de sucesso na remoção do laboratorio
```

## Deletar laboratorio em lote

```
    - METODO: DELETE
    - ENDPOINT: /laboratory/delete

    {
        "laboratories": [1, 2, 3, 4],
    }

    - Retorna uma mensagem de sucesso na remoção dos laboratorios
```

# Endpoints para associar um exame em um laboratorio

## Listar todas as assosiações

```
    METODO: GET
    ENDPOINT: /exams-laboratories/list

    Retorna a lista de todos as assosiações entre exames e laboratorios
```

## Criar assosiação

```
    METODO: POST
    ENDPOINT: /exams-laboratories/create

    {
        "laboratory": 1,
        "exam": 1
    }

    Retorna s assosiações entre um exame e um laboratorio criado
```

## Criar assosiação em lote

```
    METODO: POST
    ENDPOINT: /exams-laboratories/create-in-batch

    {
        "examsLaboratories": [
            {
                "laboratory": 1,
                "exam": 1
            },
            {
                "laboratory": 1,
                "exam": 2
            },
            {
                "laboratory": 1,
                "exam": 3
            },
        ]
    }

    Retorna uma mensagem de sucesso na criação das assosiações
```

## Remover assosiação

```
    METODO: DELETE
    ENDPOINT: /exams-laboratories/delete

    {
        "id": 1
    }

    Retorna uma mensagem de sucesso na remoçAo da assosiação
```

## Remover assosiação em lote

```
    METODO: DELETE
    ENDPOINT: /exams-laboratories/delete-in-batch

    {
        "examsLaboratories": [1, 2, 3]
    }

    Retorna uma mensagem de sucesso na remoçAo das assosiações
```