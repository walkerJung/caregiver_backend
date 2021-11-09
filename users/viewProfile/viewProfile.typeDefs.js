import { gql } from "apollo-server";

export default gql`
  type Query {
    viewProfile(userId: String!): User
  }
`;
