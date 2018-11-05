Todos API
=========
API for managing a user's todos, with signup & authentication features.

## API Documentation

`URL:` https://widergy-todos-api.herokuapp.com

`Headers`:
  + For requests that requires authentication: `x-auth: YOUR-USER-JWT`
  + For requests that requires a body: `Content-Type: application/json`

### Users

+ Signup: `POST /users`
  + Body: `{ "email": "john_doe@example.com", "password": "abc123" }`

+ Login: `POST /users/login`
  + Body: `{ "email": "john_doe@example.com", "password": "abc123" }`

+ Me: `GET /users/me`
  + Requires authentication

+ Logout: `DELETE /users/me/token`
  + Requires authentication

### Todos

+ List todos: `GET /todos`
  + Requires authentication

+ Create todo: `POST /todos`
  + Requires authentication
  + Body: `{ "text": "Walk the dog" }`

+ Read todo: `GET /todos/:id`
  + Requires authentication

+ Update todo: `PATCH /todos/:id`
  + Requires authentication
  + Body: `{ "text": "Walk the dog", "completed": true }`

+ Delete todo: `DELETE /todos/:id`
  + Requires authentication
