import { gql } from "apollo-server";

export default gql`
  type Query {
    viewAnnouncement(code: Int!): Announcement!
  }
`;
