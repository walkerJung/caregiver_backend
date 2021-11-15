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
    createedAt: String!
  }
`;
