import client from "../../client";

export default {
  Mutation: {
    choiceCaregiver: async (
      _,
      { code, announcementCode, confirmCost },
      { loggedInUser }
    ) => {
      try {
        if (!code || !announcementCode) {
          throw new Error("잘못된 접근입니다.");
        }

        const announcement = await client.announcement.findUnique({
          where: {
            code: announcementCode,
          },
        });

        const announcementApplication =
          await client.announcementApplication.findUnique({
            where: {
              code,
            },
          });

        if (
          announcement.userCode != loggedInUser.code ||
          !announcement ||
          !announcementApplication
        ) {
          throw new Error("잘못된 접근입니다.");
        }

        await client.announcementApplication.update({
          where: {
            code,
          },
          data: {
            confirm: true,
          },
        });

        await client.announcement.update({
          where: {
            code: announcementCode,
          },
          data: {
            status: 4,
            confirmCaregiverCode: announcementApplication.userCode,
            confirmCost: Math.floor(
              announcementApplication.caregiverCost +
                announcementApplication.caregiverCost / 9
            ),
          },
        });

        return {
          ok: true,
        };
      } catch (e) {
        console.log(e);
        return {
          ok: false,
          error: "간병인 선택에 실패하였습니다. 다시 시도해주세요.",
        };
      }
    },
  },
};
