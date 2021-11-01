import { gql } from "apollo-server";

export default gql`
  type Mutation {
    deleteNotice(code: Int!): MutationResponse!
  }
`;
