import { gql } from "apollo-server";

export default gql`
  type UserQueryResult {
    users: [User]!
    count: Int!
    result: Boolean!
  }

  type Query {
    listUser(type: String!, skip: Int!, take: Int!): UserQueryResult!
  }
`;
