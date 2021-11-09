import { gql } from "apollo-server";

export default gql`
  type Query {
    findUserId(phone: String!): FindUserIdResult!
  }

  type FindUserIdResult {
    ok: Boolean!
    error: String
    userId: String!
  }
`;
