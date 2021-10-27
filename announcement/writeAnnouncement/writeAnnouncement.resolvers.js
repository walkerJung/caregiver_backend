import client from "../../client";

export default {
  Mutation: {
    writeAnnouncement: async (
      _,
      {
        userCode,
        announcementApplicationCode,
        confirmCaregiverId,
        needMealCare,
        needUrineCare,
        needSuctionCare,
        needMoveCare,
        needBedCare,
        needHygieneCare,
        caregiverMeal,
        infectiousDisease,
        expectedCost,
        hopeCost,
        title,
        startDate,
        endDate,
        protectorName,
        protectorPhone,
        patientName,
        patientAge,
        patientWeight,
        address,
        addressDetail,
        nursingGrade,
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
            id: userCode,
          },
        });
        if (!existUser) {
          throw new Error("잘못된 접근입니다.");
        }
        await client.announcement.create({
          data: {
            status: 1,
            userCode,
            announcementApplicationCode,
            confirmCaregiverId,
            needMealCare,
            needUrineCare,
            needSuctionCare,
            needMoveCare,
            needBedCare,
            needHygieneCare,
            caregiverMeal,
            infectiousDisease,
            expectedCost,
            hopeCost,
            title,
            startDate,
            endDate,
            protectorName,
            protectorPhone,
            patientName,
            patientAge,
            patientWeight,
            address,
            addressDetail,
            nursingGrade,
          },
        });
        return {
          ok: true,
        };
      } catch (e) {
        return {
          ok: false,
          error: "간병 공고등록에 실패하였습니다. 관리자에게 문의해주세요.",
        };
      }
    },
  },
};
