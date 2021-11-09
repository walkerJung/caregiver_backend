import client from "../../client";

export default {
  Mutation: {
    completeAnnouncement: async (_, { code }) => {
      try {
        await client.announcement.update({
          where: {
            code,
          },
          data: {
            status: 5,
          },
        });
        return {
          ok: true,
        };
      } catch (e) {
        return {
          ok: false,
          error: "입금완료 및 승인처리에 실패하였습니다. 다시 시도해주세요.",
        };
      }
    },
  },
};
