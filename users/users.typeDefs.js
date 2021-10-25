import { gql } from "apollo-server";

export default gql`
  type User {
    id: Int!
    userType: String!
    userId: String!
    userName: String!
    password: String!
    sex: String!
    age: Int!
    profile: String
    createdAt: String!
    updatedAt: String!
  }
`;
