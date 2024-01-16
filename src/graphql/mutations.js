import { gql } from '@apollo/client';

export const SIGN_IN_MUTATION = gql`
  mutation Authenticate($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;
