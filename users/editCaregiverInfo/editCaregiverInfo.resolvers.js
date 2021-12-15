import bcrypt from "bcrypt";
import client from "../../client";
const { ApolloServer, gql } = require("apollo-server-express");
const {
  GraphQLUpload,
  graphqlUploadExpress, // A Koa implementation is also exported.
} = require("graphql-upload");
const { finished } = require("stream/promises");

export default {
  Upload: GraphQLUpload,

  Mutation: {
    editCaregiverInfo: async (
      _,
      {
        userCode,
        residentNumber,
        idCard,
        smoke,
        drink,
        mealCare,
        urineCare,
        suctionCare,
        moveCare,
        bedCare,
        address,
        addressDetail,
        bankInfo,
      },
      { loggedInUser }
    ) => {
      try {
        const { createReadStream, filename, mimetype, encoding } = await idCard;
        const stream = createReadStream();
        const out = require("fs").createWriteStream("local-file-output.txt");
        stream.pipe(out);
        await finished(out);

        if (loggedInUser.code != userCode) {
          throw new Error("잘못된 접근입니다.");
        }

        await client.caregiverInfo.update({
          where: {
            userCode,
          },
          data: {
            residentNumber,
            idCard,
            smoke,
            drink,
            mealCare,
            urineCare,
            suctionCare,
            moveCare,
            bedCare,
            address,
            addressDetail,
            bankInfo,
          },
        });
        return {
          ok: true,
        };
      } catch (e) {
        console.log(e);
        return {
          ok: false,
          error: "간병인정보 수정에 실패하였습니다. 관리자에게 문의해주세요.",
        };
      }
    },
  },
};
