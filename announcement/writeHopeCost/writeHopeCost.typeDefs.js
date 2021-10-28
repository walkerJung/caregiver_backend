import { gql } from "apollo-server";

export default gql`
  type Mutation {
    writeHopeCost(code: Int!, hopeCost: Int!): MutationResponse!
  }
`;
