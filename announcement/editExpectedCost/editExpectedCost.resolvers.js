import client from "../../client";

export default {
  Mutation: {
    editExpectedCost: async (_, { code, expectedCost }) => {
      try {
        await client.announcement.update({
          where: {
            code,
          },
          data: {
            expectedCost,
          },
        });
        return {
          ok: true,
        };
      } catch (e) {
        return {
          ok: false,
          error: "예상간병비 수정이 실패하였습니다. 다시 시도해주세요.",
        };
      }
    },
  },
};
