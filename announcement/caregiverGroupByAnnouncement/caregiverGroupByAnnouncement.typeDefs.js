import { gql } from "apollo-server";

export default gql`
  type GroupByAnnouncement {
    announcements: [Announcement]!
    count: Int!
    result: Boolean!
  }

  type Query {
    caregiverGroupByAnnouncement(
      userCode: Int
      status: Int
    ): GroupByAnnouncement!
  }
`;
