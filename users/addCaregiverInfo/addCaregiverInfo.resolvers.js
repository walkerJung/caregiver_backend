import client from "../../client";

export default {
  Mutation: {
    addCaregiverInfo: async (
      _,
      {
        userCode,
        address,
        addressDetail,
        residentNumber,
        idCard,
        bankInfo,
        smoke,
        drink,
        mealCare,
        urineCare,
        suctionCare,
        moveCare,
        bedCare,
      }
    ) => {
      try {
        if (!userCode) {
          throw new Error("잘못된 접근입니다.");
        }
        var writeIP = ""; // IP 주소
        require("dns").lookup(
          require("os").hostname(),
          function (err, add, fam) {
            writeIP = add;
          }
        );
        await client.caregiverInfo.create({
          data: {
            userCode,
            address,
            addressDetail,
            residentNumber,
            idCard,
            bankInfo,
            smoke,
            drink,
            mealCare,
            urineCare,
            suctionCare,
            moveCare,
            bedCare,
          },
        });
        return {
          ok: true,
        };
      } catch (e) {
        return {
          ok: false,
          error: "간병인 정보 입력에 실패하였습니다. 관리자에게 문의해주세요.",
        };
      }
    },
  },
};
