import { gql } from "apollo-server";

export default gql`
  type User {
    code: Int!
    userId: String!
    userType: String!
    userName: String!
    password: String!
    sex: String!
    phone: String!
  }

  type UserQueryResult {
    users: [User]!
    result: Boolean!
  }

  type Query {
    listUser(type: String!): UserQueryResult!
  }
`;
