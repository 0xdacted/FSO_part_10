import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query {
  repositories {
    edges {
      node {
        fullName
        description
        ownerAvatarUrl
        language
        stargazersCount
        forksCount
        reviewCount
        ratingAverage
        id
      }
    }
  }
}  
`;

export const SIGNED_IN = gql`
query {
  me {
    id
    username
  }
}  
`;

