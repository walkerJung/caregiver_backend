import { gql } from "apollo-server";

export default gql`
  type Mutation {
    writeCaregiverCost(
      announcementCode: Int!
      caregiverCost: Int!
    ): MutationResponse!
  }
`;
