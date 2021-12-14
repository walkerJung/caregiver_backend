import { gql } from "apollo-server";

export default gql`
  type Query {
    caregiverGroupByAnnouncement(
      userCode: Int
      status: Int
    ): GroupByAnnouncement!
  }

  type GroupByAnnouncement {
    announcements: [Announcement]!
    count: Int!
    result: Boolean!
  }
`;
