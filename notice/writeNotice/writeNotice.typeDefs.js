import { gql } from "apollo-server";

export default gql`
  type Mutation {
    writeNotice(title: String!, content: String!): MutationResponse!
  }
`;
