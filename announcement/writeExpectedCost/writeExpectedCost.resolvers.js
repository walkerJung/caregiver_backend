import client from "../../client";

export default {
  Mutation: {
    writeExpectedCost: async (_, { code, expectedCost }) => {
      try {
        await client.announcement.update({
          where: {
            code,
          },
          data: {
            status: 2,
            expectedCost,
          },
        });
        return {
          ok: true,
        };
      } catch (e) {
        return {
          ok: false,
          error: "예상간병비 등록이 실패하였습니다. 다시 시도해주세요.",
        };
      }
    },
  },
};
