import { gql } from "apollo-server";

export default gql`
  type Mutation {
    writeExpectedCost(
      announcementCode: Int!
      expectedCost: Int!
    ): MutationResponse!
  }
`;
