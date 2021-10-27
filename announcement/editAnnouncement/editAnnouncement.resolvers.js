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
            data: {
              id: announcementCode,
            },
          },
        });
        console.log(announcement);
        if (!announcement) {
          throw new Error("삭제된 공고입니다. 관리자에게 문의해주세요.");
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
          error: "간병 공고등록에 실패하였습니다. 관리자에게 문의해주세요.",
        };
      }
    },
  },
};
