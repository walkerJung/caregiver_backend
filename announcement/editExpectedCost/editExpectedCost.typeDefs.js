import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editExpectedCost(code: Int!, expectedCost: Int!): MutationResponse!
  }
`;
