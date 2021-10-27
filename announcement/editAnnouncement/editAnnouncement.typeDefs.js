import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editAnnouncement(
      announcementCode: Int!
      userCode: Int!
      confirmCaregiverId: Int
      needMealCare: String!
      needUrineCare: String!
      needSuctionCare: String!
      needMoveCare: String!
      needBedCare: String!
      needHygieneCare: String!
      caregiverMeal: String!
      infectiousDisease: String!
      title: String!
      startDate: String!
      endDate: String!
      protectorName: String!
      protectorPhone: String!
      patientName: String!
      patientAge: Int!
      patientWeight: Int!
      address: String!
      addressDetail: String!
      nursingGrade: String!
      disease: String!
      isolation: Boolean!
    ): MutationResponse!
  }
`;
