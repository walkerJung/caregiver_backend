import { gql } from "apollo-server";

export default gql`
  type AnnouncementApplication {
    code: Int!
    announcementCode: Int!
    userCode: Int!
    caregiverCost: Int!
    confirm: Boolean!
    createdAt: String!
    user: User
    announcement: Announcement
  }

  type AnnouncementApplicationQueryResult {
    announcementApplications: [AnnouncementApplication]!
    count: Int!
    result: Boolean!
  }

  type Query {
    listAnnouncementApplication(
      userCode: Int
      status: Int
      take: Int
      skip: Int
    ): AnnouncementApplicationQueryResult!
  }
`;
