import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        password
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const SAVE_TASK = gql`
  mutation saveTask($input: SavedTaskInput) {
    saveTask(input: $input) {
      _id
      username
      email
      savedTasks {
        activity
        type
        participants
        price
        link
        key
        accessibility
      }
    }
  }
`;

export const REMOVE_TASK = gql`
  mutation removeTask($key: String!) {
    removeTask(key: $key) {
      _id
      username
      email
      savedTasks {
        activity
        type
        participants
        price
        link
        key
        accessibility
      }
    }
  }
`;
