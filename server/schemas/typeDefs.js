const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    # _id: ID
    username: String
    email: String
    password: String
    savedTasks: [Task]
    token: String
  }
  input RegisterInput {
    username: String!
    email: String!
    password: String!
  }
  input LoginInput {
    email: String!
    password: String!
  }
  # type Auth {
  #   token: ID!
  #   user: User
  # }

  type Task {
    activity: String
    type: String
    participants: Int
    price: Int
    link: String
    key: String
    accessibility: Float
  }
  input SavedTaskInput {
    activity: String
    type: String
    participants: Int
    price: Int
    link: String
    key: String
    accessibility: Float
  }
  type Query {
    # get user by id and populate savedTasks?
    user(id: ID!): User
  }

  type Mutation {
    registerUser(registerInput: RegisterInput): User
    loginUser(loginUser: LoginInput ): User
    saveTask(input: SavedTaskInput): User
    removeTask(key: String!): User
  }
`;

module.exports = typeDefs;
