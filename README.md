```markdown
# Documentação das Rotas da API

Esta documentação detalha todas as rotas disponíveis na nossa API, incluindo as operações de autenticação e gerenciamento de usuários utilizando Supabase.

## Base URL

http://localhost:3333
```

## Autenticação

### Registrar um Novo Usuário

**Endpoint:** `/register`

**Método:** `POST`

**Descrição:** Registra um novo usuário no sistema.

**Corpo da Requisição:**

```json
{
  "email": "user@example.com",
  "password": "password",
  "name": "John Doe"
}
```

**Resposta de Sucesso:**

```json
{
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

**Resposta de Erro:**

```json
{
  "message": "Error message"
}
```

### Login

**Endpoint:** `/login`

**Método:** `POST`

**Descrição:** Faz login de um usuário e retorna um token JWT.

**Corpo da Requisição:**

```json
{
  "email": "user@example.com",
  "password": "password"
}
```

**Resposta de Sucesso:**

```json
{
  "token": "jwt_token"
}
```

**Resposta de Erro:**

```json
{
  "message": "Invalid credentials"
}
```

### Logout

**Endpoint:** `/logout`

**Método:** `POST`

**Descrição:** Faz logout do usuário autenticado.

**Cabeçalho da Requisição:**

```
Authorization: Bearer jwt_token
```

**Resposta de Sucesso:**

```json
{
  "message": "Logged out successfully"
}
```

**Resposta de Erro:**

```json
{
  "message": "Error message"
}
```

## Usuários

### Listar Todos os Usuários

**Endpoint:** `/users`

**Método:** `GET`

**Descrição:** Retorna uma lista de todos os usuários.

**Cabeçalho da Requisição:**

```
Authorization: Bearer jwt_token
```

**Resposta de Sucesso:**

```json
[
  {
    "id": "user_id",
    "email": "user@example.com",
    "name": "John Doe"
  },
  ...
]
```

**Resposta de Erro:**

```json
{
  "message": "Error message"
}
```

### Obter Usuário por ID

**Endpoint:** `/users/:id`

**Método:** `GET`

**Descrição:** Retorna os detalhes de um usuário específico.

**Cabeçalho da Requisição:**

```
Authorization: Bearer jwt_token
```

**Resposta de Sucesso:**

```json
{
  "id": "user_id",
  "email": "user@example.com",
  "name": "John Doe"
}
```

**Resposta de Erro:**

```json
{
  "message": "Error message"
}
```

### Criar Usuário

**Endpoint:** `/users`

**Método:** `POST`

**Descrição:** Cria um novo usuário.

**Cabeçalho da Requisição:**

```
Authorization: Bearer jwt_token
```

**Corpo da Requisição:**

```json
{
  "email": "user@example.com",
  "name": "John Doe"
}
```

**Resposta de Sucesso:**

```json
{
  "id": "user_id",
  "email": "user@example.com",
  "name": "John Doe"
}
```

**Resposta de Erro:**

```json
{
  "message": "Error message"
}
```

### Atualizar Usuário

**Endpoint:** `/users/:id`

**Método:** `PUT`

**Descrição:** Atualiza os dados de um usuário específico.

**Cabeçalho da Requisição:**

```
Authorization: Bearer jwt_token
```

**Corpo da Requisição:**

```json
{
  "email": "user@example.com",
  "name": "John Doe"
}
```

**Resposta de Sucesso:**

```json
{
  "id": "user_id",
  "email": "user@example.com",
  "name": "John Doe"
}
```

**Resposta de Erro:**

```json
{
  "message": "Error message"
}
```

### Excluir Usuário

**Endpoint:** `/users/:id`

**Método:** `DELETE`

**Descrição:** Exclui um usuário específico.

**Cabeçalho da Requisição:**

```
Authorization: Bearer jwt_token
```

**Resposta de Sucesso:**

```json
{
  "message": "User deleted successfully"
}
```

**Resposta de Erro:**

```json
{
  "message": "Error message"
}
```

## Conclusão

Esta documentação cobre todas as rotas de autenticação e gerenciamento de usuários na sua API AdonisJS integrada com Supabase. Certifique-se de substituir os placeholders como `user_id` e `jwt_token` pelos valores reais ao fazer as requisições. Se precisar de mais alguma coisa, sinta-se à vontade para perguntar!

```

```
