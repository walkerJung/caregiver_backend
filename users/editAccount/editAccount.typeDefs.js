import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editAccount(
      userCode: Int!
      phone: String
      userName: String
      password: String
    ): MutationResponse!
  }
`;
