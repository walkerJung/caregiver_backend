import client from "../../client";

export default {
  Query: {
    findUserPassword: async (_, { userId, userName, phone }) => {
      if (!userId || !userName || !phone) {
        return {
          ok: false,
          error: "비정상적인 접근입니다.",
        };
      }

      const user = await client.user.findFirst({
        where: {
          userId,
          phone,
          phone,
        },
      });

      if (!user) {
        return {
          ok: false,
          error:
            "회원정보를 찾을수 없습니다. 입력하신 정보를 다시 확인해주세요.",
        };
      }

      const uglyPassword = await bcrypt.hash("password", 10);
      await client.user.update({
        where: {
          userId: user.userId,
        },
        data: {
          password: uglyPassword,
        },
      });

      return {
        ok: true,
        password: "password",
      };
    },
  },
};
