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
<<<<<<< HEAD
  type SavedTask {
=======
  type SavedTaskChoice {
>>>>>>> b82a3084635ec92eb85b5031655536c8cc0c4c62
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
<<<<<<< HEAD
    saveTask(input: SavedTask): User
=======
    saveTask(input: SavedTaskChoice): User
>>>>>>> b82a3084635ec92eb85b5031655536c8cc0c4c62
    removeTask(key: String!): User
  }
`;

module.exports = typeDefs;
