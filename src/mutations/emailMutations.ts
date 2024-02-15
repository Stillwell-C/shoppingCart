import { gql } from "@apollo/client";

const ADD_EMAIL = gql`
  mutation createEmail($email: String!) {
    createEmail(email: $email) {
      email
    }
  }
`;

export { ADD_EMAIL };
