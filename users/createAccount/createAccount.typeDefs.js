import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createAccount(
      userType: String!
      userId: String
      userName: String!
      password: String!
      email: String!
      sex: String!
      age: Int!
      profile: String
    ): MutationResponse!
  }
`;
