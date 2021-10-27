import client from "../../client";

export default {
  Mutation: {
    editAnnouncement: async (
      _,
      {
        announcementCode,
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
        const announcement = await client.announcement.findUnique({
          where: {
            id: announcementCode,
          },
        });
        if (!announcement) {
          throw new Error("삭제된 공고입니다. 관리자에게 문의해주세요.");
        }
        if (announcement.status > 1) {
          throw new Error(
            "예상간병비가 산출된 공고는 수정이 불가능합니다. 관리자에게 문의해주세요."
          );
        }
        await client.announcement.update({
          where: {
            id: announcementCode,
          },
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
        console.log(e);
        return {
          ok: false,
          error: "간병 공고수정에 실패하였습니다. 관리자에게 문의해주세요.",
        };
      }
    },
  },
};
