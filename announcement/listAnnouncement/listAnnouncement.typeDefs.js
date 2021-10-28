import { gql } from "apollo-server";

export default gql`
  type Announcement {
    status: Int!
    userCode: Int!
    needMealCare: String!
    needUrineCare: String!
    needSuctionCare: String!
    needMoveCare: String!
    needBedCare: String!
    needHygieneCare: String1
    caregiverMeal: String!
    infectiousDisease: String!
    title: String!
    startDate: DateTime!
    endDate: DateTime!
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
  }

  type Query {
    ListAnnouncement(): [Announcement]!
  }
`;
