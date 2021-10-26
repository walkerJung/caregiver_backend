import { gql } from "apollo-server";

export default gql`
  type Mutation {
    addCaregiverInfo(
      userCode: Int!
      address: String!
      addressDetail: String!
      residentNumber: String!
      idCard: String!
      bankInfo: String!
      smoke: String!
      drink: String!
      mealCare: String!
      urineCare: String!
      suctionCare: String!
      moveCare: String!
      bedCare: String!
    ): MutationResponse!
  }
`;
