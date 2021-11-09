import { gql } from "apollo-server";

export default gql`
  type Query {
    findUserId(phone: String!): findUserIdResult!
  }

  type User {
    code: Int!
    userId: String!
    userName: String!
    password: String!
    sex: String!
    phone: String!
  }

  type findUserIdResult {
    ok: Boolean!
    error: String
    user: User!
  }
`;
