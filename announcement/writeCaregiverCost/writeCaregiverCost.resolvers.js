import client from "../../client";

export default {
  Mutation: {
    writeCaregiverCost: async (
      _,
      { announcementCode, caregiverCost },
      { loggedInUser }
    ) => {
      try {
        var writeIP = ""; // IP 주소
        require("dns").lookup(
          require("os").hostname(),
          function (err, add, fam) {
            writeIP = add;
          }
        );
        if (!announcementCode) {
          throw new Error("잘못된 접근입니다.");
        }
        const announcementApplication =
          await client.announcementApplication.findUnique({
            where: {
              code: announcementCode,
            },
          });
        if (announcementApplication.userCode == loggedInUser.code) {
          throw new Error("이미 지원한 공고에는 중복으로 지원할수 없습니다.");
        }
        await client.announcementApplication.create({
          data: {
            userCode: loggedInUser.code,
            announcementCode,
            caregiverCost,
            confirm: false,
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
          error: "본인간병비 등록이 실패하였습니다. 다시 시도해주세요.",
        };
      }
    },
  },
};
