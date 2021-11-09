import bcrypt from "bcrypt";
import client from "../../client";

export default {
  Mutation: {
    editAccount: async (
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
        return {
          ok: false,
          error: "간병인정보 수정에 실패하였습니다. 관리자에게 문의해주세요.",
        };
      }
    },
  },
};
