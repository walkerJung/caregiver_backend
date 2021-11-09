import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editAccount(
      userCode: Ing!
      phone: String
      userName: String
      password: String
    ): MutationResponse!
  }
`;
