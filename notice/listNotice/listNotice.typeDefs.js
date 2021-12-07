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
    count: Int!
    result: Boolean!
  }

  type Query {
    listNotice(take: Int, skip: Int): NoticeQueryResult!
  }
`;
