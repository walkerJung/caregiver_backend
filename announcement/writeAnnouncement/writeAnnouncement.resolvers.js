import client from "../../client";

export default {
  Mutation: {
    writeAnnouncement: async (
      _,
      {
        userCode,
        confirmCaregiverId,
        needMealCare,
        needUrineCare,
        needSuctionCare,
        needMoveCare,
        needBedCare,
        needHygieneCare,
        caregiverMeal,
        infectiousDisease,
        title,
        startDate,
        endDate,
        startTime,
        endTime,
        protectorName,
        protectorPhone,
        patientName,
        patientAge,
        patientWeight,
        address,
        addressDetail,
        nursingGrade,
        disease,
        isolation,
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
          throw new Error(
            "비회원은 글쓰기권한이 없습니다. 관리자에게 문의해주세요."
          );
        }
        await client.announcement.create({
          data: {
            status: 1,
            userCode,
            confirmCaregiverId,
            needMealCare,
            needUrineCare,
            needSuctionCare,
            needMoveCare,
            needBedCare,
            needHygieneCare,
            caregiverMeal,
            infectiousDisease,
            title,
            startDate,
            endDate,
            startTime,
            endTime,
            protectorName,
            protectorPhone,
            patientName,
            patientAge,
            patientWeight,
            address,
            addressDetail,
            nursingGrade,
            disease,
            isolation,
            writeIP,
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
