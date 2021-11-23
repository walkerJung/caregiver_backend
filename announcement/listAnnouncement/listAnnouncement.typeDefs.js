import { gql } from "apollo-server";

export default gql`
  type Announcement {
    code: Int!
    status: Int!
    userCode: Int!
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
    expectedCost: Int
    hopeCost: Int
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
    createdAt: String!
    announcementApplication: [AnnouncementApplication]
    user: User
  }

  type AnnouncementApplication {
    code: Int!
    announcementCode: Int!
    userCode: Int!
    caregiverCost: Int!
    confirm: Boolean!
    createdAt: String!
  }

  type AnnouncementQueryResult {
    announcements: [Announcement]!
    result: Boolean!
  }

  type Query {
    listAnnouncement(userCode: Int, status: Int): AnnouncementQueryResult!
  }
`;
