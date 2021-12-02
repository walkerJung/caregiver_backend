import { gql } from "apollo-server";

export default gql`
  scalar Upload
  scalar Upload2

  type Mutation {
    createAccount(
      userId: String!
      userType: String!
      userName: String!
      password: String!
      sex: String!
      phone: String!
      address: String
      addressDetail: String
      residentNumber: String
      idCard: Upload
      bankInfo: Upload2
      smoke: String
      drink: String
      mealCare: String
      urineCare: String
      suctionCare: String
      moveCare: String
      bedCare: String
    ): MutationResponse!
  }
`;
