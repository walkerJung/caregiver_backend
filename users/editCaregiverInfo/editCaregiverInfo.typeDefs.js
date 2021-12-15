import { gql } from "apollo-server";

export default gql`
  scalar Upload

  type Mutation {
    editCaregiverInfo(
      userCode: Int!
      address: String
      addressDetail: String
      residentNumber: String
      idCard: Upload
      bankInfo: Upload
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
