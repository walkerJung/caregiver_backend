import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editAccount(
      phone: String
      userName: String
      password: String
    ): MutationResponse!
  }
`;
