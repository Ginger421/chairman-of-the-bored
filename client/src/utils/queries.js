import { gql } from "@apollo/client";

export const GET_USER = gql`
  {
    theBored {
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
