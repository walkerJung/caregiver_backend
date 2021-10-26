import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createAccount(
      userId: String!
      userType: String!
      userName: String!
      password: String!
      sex: String!
      phone: String!
    ): MutationResponse!
  }
`;
