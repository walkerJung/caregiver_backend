import { gql } from "apollo-server";

export default gql`
  type Mutation {
    choiceCaregiver(announcementCode: Int!, userId: String!): MutationResponse!
  }
`;
