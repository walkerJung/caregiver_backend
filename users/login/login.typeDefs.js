import { gql } from "apollo-server";

export default gql`
  type LoginResult {
    ok: Boolean!
    token: String
    error: String
    user: User
  }
  type Mutation {
    login(userId: String!, password: String!): LoginResult!
  }
`;
