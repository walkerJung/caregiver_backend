import bcrypt from "bcrypt";
import client from "../../client";

export default {
  Query: {
    findUserPassword: async (_, { userId, userName, phone }) => {
      if (!userId || !userName || !phone) {
        throw new Error("잘못된 접근입니다.");
      }

      const user = await client.user.findFirst({
        where: {
          userId,
          phone,
          phone,
        },
      });

      if (!user) {
        throw new Error(
          "회원정보를 찾을수 없습니다. 입력하신 정보를 다시 확인해주세요."
        );
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
