import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editNotice(code: Int!, title: String!, content: String!): MutationResponse!
  }
`;
