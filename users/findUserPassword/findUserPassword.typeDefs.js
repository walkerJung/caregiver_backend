import { gql } from "apollo-server";

export default gql`
  type Query {
    findUserPassword(
      userId: String!
      userName: String!
      phone: String!
    ): FindUserPasswordResult!
  }

  type FindUserPasswordResult {
    ok: Boolean!
    error: String
    password: String!
  }
`;
