import { gql } from "apollo-server";

export default gql`
  type Query {
    findUserPassword(
      userId: String!
      userName: String!
      phone: String!
    ): FindUserPasswordResult!
  }

  type UserPassword {
    password: String!
  }

  type FindUserPasswordResult {
    ok: Boolean!
    error: String
    password: UserPassword!
  }
`;
