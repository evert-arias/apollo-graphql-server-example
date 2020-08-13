/* 
    Apollo GraphQL server example with Express
    Evert Arias - 08/12/2020
*/

// Express
const express = require("express");

// Apollo
const { ApolloServer, gql } = require("apollo-server-express");

// User's object array
const users = [
  { id: "1", firstName: "Evert", lastName: "Arias", username: "evert.arias" },
  { id: "2", firstName: "John", lastName: "Smith", username: "john.smith" },
];

// Express app instance
const app = express();

// Home route of express app
app.get("/", (req, res) => {
  res.send("Welcome to my Apollo Server");
});

// GraphQL schema object
const schema = gql`
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    userById(id: Int!): User
  }

  type User {
    id: Int!
    firstName: String!
    lastName: String!
    username: String!
  }
`;

// GraphQL resolver object
const resolvers = {
  Query: {
    me: () => {
      return users.find((user) => user.id == 1);
    },
    users: () => {
      return users;
    },
    user: (parent, args, context, info) => {
      return users.find((user) => user.username === args.username);
    },
    userById: (parent, args, context, info) => {
      return users.find((user) => user.id == args.id);
    },
  },
};

// Apollo server instance
const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers,
});

// Tell Apollo server to use the Express app
server.applyMiddleware({ app, path: "/graphql" });

// Express, start listening on port 3000
app.listen(3000, () => {
  console.log(`Server listening on http://localhost:3000${server.graphqlPath}`);
});
