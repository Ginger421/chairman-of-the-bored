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
    # confirmPassword: String
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
    # this will look at user.token in resolvers.js to see if it is valid
    loginUser(loginInput: LoginInput ): User
    saveTask(input: SavedTaskInput): User
    removeTask(key: String!): User
  }
`;

module.exports = typeDefs;
