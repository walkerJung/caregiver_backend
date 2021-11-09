import client from "../../client";

export default {
  Query: {
    findUserId: async (_, { phone }) => {
      if (!phone) {
        return {
          ok: false,
          error: "비정상적인 접근입니다.",
        };
      }

      const user = await client.user.findUnique({
        where: {
          phone,
        },
      });

      if (!user) {
        return {
          ok: false,
          error: "회원정보를 찾을수 없습니다. 핸드폰번호를 확인해주세요.",
        };
      }

      return {
        ok: true,
        user,
      };
    },
  },
};
