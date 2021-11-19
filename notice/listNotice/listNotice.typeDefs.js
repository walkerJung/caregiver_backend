import { gql } from "apollo-server";

export default gql`
  type Notice {
    code: Int!
    title: String!
    content: String!
    createdAt: String!
    updatedAt: String!
  }

  type NoticeQueryResult {
    notices: [Notice]!
    result: Boolean!
  }

  type Query {
    listNotice: NoticeQueryResult!
  }
`;
