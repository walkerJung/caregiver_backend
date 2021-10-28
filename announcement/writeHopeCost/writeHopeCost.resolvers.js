import client from "../../client";

export default {
  Mutation: {
    writeHopeCost: async (_, { code, hopeCost }) => {
      try {
        await client.announcement.update({
          where: {
            code,
          },
          data: {
            hopeCost,
          },
        });
        return {
          ok: true,
        };
      } catch (e) {
        return {
          ok: false,
          error: "희망간병비 등록이 실패하였습니다. 다시 시도해주세요.",
        };
      }
    },
  },
};
