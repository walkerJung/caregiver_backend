import { gql } from "apollo-server";

export default gql`
  type CaregiverInfo {
    code: Int!
    userCode: Int!
    address: String!
    addressDetail: String!
    residentNumber: String!
    idCard: String!
    bankInfo: String!
    smoke: String!
    drink: String!
    mealCare: String!
    urineCare: String!
    suctionCare: String!
    moveCare: String!
    bedCare: String!
  }

  type User {
    code: Int!
    userId: String!
    userType: String!
    userName: String!
    password: String!
    sex: String!
    phone: String!
    createdAt: String!
    CaregiverInfo: [CaregiverInfo]
  }
`;
