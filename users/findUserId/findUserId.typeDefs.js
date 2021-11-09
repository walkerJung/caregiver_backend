import { gql } from "apollo-server";

export default gql`
  type Query {
    findUserId(phone: String!): FindUserIdResult!
  }

  type UserId {
    userId: String!
  }

  type FindUserIdResult {
    ok: Boolean!
    error: String
    userId: UserId!
  }
`;
