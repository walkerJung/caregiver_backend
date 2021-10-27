import client from "../../client";

export default {
  Mutation: {
    deleteAnnouncement: async (_, { userCode, announcementCode }) => {
      try {
        if (!announcementCode) {
          throw new Error("잘못된 접근입니다.");
        }
        const announcement = await client.announcement.findUnique({
          where: {
            id: announcementCode,
          },
        });
        if (!announcement) {
          throw new Error("이미 삭제된 공고입니다.");
        }
        if (announcement.userCode != userCode) {
          throw new Error("본인이 작성한 공고만 삭제 가능합니다.");
        }
        await client.announcement.delete({
          where: {
            id: announcementCode,
          },
        });
        return {
          ok: true,
        };
      } catch (e) {
        console.log(e);
        return {
          ok: false,
          error: "공고 삭제에 실패하였습니다. 관리자에게 문의해주세요.",
        };
      }
    },
  },
};
