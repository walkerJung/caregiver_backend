import client from "../../client";

export default {
  Mutation: {
    writeExpectedCost: async (_, { announcementCode, expectedCost }) => {
      try {
        await client.announcementCode.update({
          where: {
            code: announcementCode,
          },
          data: {
            expectedCost,
          },
        });
        return {
          ok: true,
        };
      } catch (e) {
        console.log(e);
        return {
          ok: false,
          error: "예상간병비 등록이 실패하였습니다. 다시 시도해주세요.",
        };
      }
    },
  },
};
