const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    taskCount: Int
    savedTasks: [Task]
  }
  type Auth {
    token: ID!
    user: User
  }

  type Task {
    activity: String
    type: String
    participants: Int
    price: Int
    link: String
    key: String
    accessibility: Float
  }
  type SavedTaskChoice {
    activity: String
    type: String
    participants: Int
    price: Int
    link: String
    key: String
    accessibility: Float
  }
  type Query {
    theBored: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveTask(input: SavedTaskChoice): User
    removeTask(key: String!): User
  }
`;

module.exports = typeDefs;
