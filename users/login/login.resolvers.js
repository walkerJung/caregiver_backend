import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
  Mutation: {
    login: async (_, { userId, password }) => {
      // 1. 유저 아이디를 찾고
      const user = await client.user.findFirst({ where: { userId } });
      if (!user) {
        return {
          ok: false,
          error: "존재하지 않는 회원 아이디 입니다.",
        };
      }
      // 2. 비밀번호가 맞는지 체크
      const passwordOk = await bcrypt.compare(password, user.password);
      if (!passwordOk) {
        return {
          ok: false,
          error: "비밀번호를 확인해 주세요.",
        };
      }
      const token = await jwt.sign({ code: user.code }, process.env.SECRET_KEY);
      return {
        ok: true,
        token,
      };
      //
    },
  },
};
