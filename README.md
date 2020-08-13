# Apollo GraphQL Server Example

Simple example to demonstrate how to use [Apollo](https://www.apollographql.com/) and [GraphQL](https://graphql.org/) with [express](https://expressjs.com/).

### Install dependencies

```bash
npm install
```

### Start the server

```bash
npm start
```

### Load GraphQL playground

Open http://localhost:3000/graphql

### Run some queries

Retrieve all users

```
query {
  users {
      firstName
      lastName
  }
}
```

Retrieve own user

```
query {
  me {
    firstName
    lastName
  }
}
```

Retrieve user by Id

```
query {
  userById(id: 1){
    firstName
  }
}
```

## Copyright

[MIT](../LICENSE.md) © [Evert Arias](https://www.earias.me/)
