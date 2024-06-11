```markdown
# Documentação das Rotas da API

Esta documentação detalha todas as rotas disponíveis na nossa API, incluindo as operações de autenticação, gerenciamento de usuários e envio de mensagens utilizando `venom-bot` e Supabase.

## Base URL

https://api.pactum.com.br/
```

## Autenticação

### Registrar um Novo Usuário

**Endpoint:** `/register`

**Método:** `POST`

**Descrição:** Registra um novo usuário no sistema.

**Corpo da Requisição:**

```json
{
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "name": "John Doe"
  }
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
    "name": "John Doe",
    "cel_phone": "1234567890",
    "cpf": "123.456.789-00",
    "endereco": "Rua Exemplo, 123"
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
  "name": "John Doe",
  "cel_phone": "1234567890",
  "cpf": "123.456.789-00",
  "endereco": "Rua Exemplo, 123"
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
  "name": "John Doe",
  "cel_phone": "1234567890",
  "cpf": "123.456.789-00",
  "endereco": "Rua Exemplo, 123"
}
```

**Resposta de Sucesso:**

```json
{
  "id": "user_id",
  "email": "user@example.com",
  "name": "John Doe",
  "cel_phone": "1234567890",
  "cpf": "123.456.789-00",
  "endereco": "Rua Exemplo, 123"
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
  "name": "John Doe",
  "cel_phone": "1234567890",
  "cpf": "123.456.789-00",
  "endereco": "Rua Exemplo, 123"
}
```

**Resposta de Sucesso:**

```json
{
  "id": "user_id",
  "email": "user@example.com",
  "name": "John Doe",
  "cel_phone": "1234567890",
  "cpf": "123.456.789-00",
  "endereco": "Rua Exemplo, 123"
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

## Mensagens

### Enviar Mensagem

**Endpoint:** `/send-message`

**Método:** `POST`

**Descrição:** Envia uma mensagem utilizando o `venom-bot`.

**Corpo da Requisição:**

```json
{
  "to": "5511999999999@c.us",
  "message": "Hello, this is a test message!"
}
```

**Resposta de Sucesso:**

```json
{
  "success": true,
  "message": "Message sent successfully."
}
```

**Resposta de Erro:**

```json
{
  "success": false,
  "error": "Failed to send message."
}
```

````typescript

## Arquivo de Rotas

```typescript
/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import Route from '@ioc:Adonis/Core/Route'
import { middleware } from './kernel'

Route.get('/', async () => {
  return {
    System: 'Working...',
  }
})

Route.post('/send-message', 'VenomController.sendMessage')

Route.post('register', 'AuthController.register')
Route.post('login', 'AuthController.login')
Route.post('logout', 'AuthController.logout').middleware('auth')

Route.group(() => {
  Route.get('users', 'UserController.index')
  Route.get('users/:id', 'UserController.show')
  Route.post('users', 'UserController.store')
  Route.put('users/:id', 'UserController.update')
  Route.delete('users/:id', 'UserController.destroy')
}).middleware('auth')
````
