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

export const SINGLE_REPOSITORY = gql`
  query REPOSITORY_QUERY($id: ID!) {
    repository(id: $id) {
      id
      fullName
      url
      description
      ownerAvatarUrl
      language
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;
