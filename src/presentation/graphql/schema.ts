import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Greeting {
    message: String!
  }

  type Query {
    greeting: Greeting!
  }
`;
