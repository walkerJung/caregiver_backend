import { gql } from "apollo-server";

export default gql`
  type Mutation {
    writeAnnouncement(
      userCode: Int!
      announcementApplicationCode: Int!
      confirmCaregiverId: Int
      needMealCare: String!
      needUrineCare: String!
      needSuctionCare: String
      needMoveCare: String
      needBedCare: String
      needHygieneCare: String
      caregiverMeal: String
      infectiousDisease: String
      expectedCost: String
      hopeCost: String
      title: String
      startDate: String
      endDate: String
      protectorName: String
      protectorPhone: String
      patientName: String
      patientAge: Int
      patientWeight: Int
      address: String
      addressDetail: String
      nursingGrade: String
    ): MutationResponse!
  }
`;
