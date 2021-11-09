import { gql } from "apollo-server";

export default gql`
  type Mutation {
    choiceCaregiver(code: Int!, announcementCode: Int!): MutationResponse!
  }
`;
