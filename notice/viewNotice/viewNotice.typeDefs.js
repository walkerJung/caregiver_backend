import { gql } from "apollo-server";

export default gql`
  type Query {
    viewNotice(code: Int!): Notice!
  }
`;
