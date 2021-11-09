import client from "../../client";

export default {
  Mutation: {
    writeHopeCost: async (_, { code, hopeCost }, { loggedInUser }) => {
      try {
        const announcement = await client.announcement.findUnique({
          where: {
            code,
          },
        });

        if (announcement.userCode != loggedInUser.code) {
          throw new Error("잘못된 접근입니다.");
        }

        await client.announcement.update({
          where: {
            code,
          },
          data: {
            status: 3,
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
