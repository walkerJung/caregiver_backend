import { gql } from "apollo-server";

export default gql`
  type Mutation {
    deleteAnnouncement(
      userCode: Int!
      announcementCode: Int!
    ): MutationResponse!
  }
`;
