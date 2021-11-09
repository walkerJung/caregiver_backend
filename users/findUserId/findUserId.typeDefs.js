import { gql } from "apollo-server";

export default gql`
  type Query {
    findUserId(phone: String!): findUserIdResult!
  }

  type UserId {
    userId: String!
  }

  type findUserIdResult {
    ok: Boolean!
    error: String
    userId: UserId!
  }
`;
