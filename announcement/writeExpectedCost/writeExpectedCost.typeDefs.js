import { gql } from "apollo-server";

export default gql`
  type Mutation {
    writeExpectedCost(code: Int!, expectedCost: Int!): MutationResponse!
  }
`;
