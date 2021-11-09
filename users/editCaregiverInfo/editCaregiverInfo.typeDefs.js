import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editCaregiverInfo(
      userCode: Int!
      address: String
      addressDetail: String
      residentNumber: String
      idCard: String
      bankInfo: String
      smoke: String
      drink: String
      mealCare: String
      urineCare: String
      suctionCare: String
      monveCare: String
      bedCare: String
    ): MutationResponse!
  }
`;
