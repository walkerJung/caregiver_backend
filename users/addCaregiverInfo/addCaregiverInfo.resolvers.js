import client from "../../client";

export default {
  Mutation: {
    addCaregiverInfo: async (
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
        introduce,
      }
    ) => {
      try {
        var writeIP = ""; // IP 주소
        require("dns").lookup(
          require("os").hostname(),
          function (err, add, fam) {
            writeIP = add;
          }
        );
        const existUser = await client.user.findUnique({
          where: {
            code: userCode,
          },
        });
        if (!existUser) {
          throw new Error("잘못된 접근입니다.");
        }
        if (existUser.userType != "간병인") {
          throw new Error("잘못된 접근입니다.");
        }
        await client.caregiverInfo.create({
          data: {
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
            introduce,
            writeIP,
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
