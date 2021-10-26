import bcrypt from "bcrypt";
import client from "../../client";

export default {
  Mutation: {
    createAccount: async (
      _,
      { userId, userType, userName, password, sex, phone }
    ) => {
      try {
        const existingUserId = await client.user.findFirst({
          where: {
            userId,
          },
        });
        if (existingUserId) {
          throw new Error("동일한 회원아이디가 존재합니다.");
        }
        const existingUserPhone = await client.user.findFirst({
          where: {
            phone,
          },
        });
        if (existingUserPhone) {
          throw new Error("동일한 회원연락처가 존재합니다.");
        }
        const uglyPassword = await bcrypt.hash(password, 10);
        await client.user.create({
          data: {
            userId,
            userType,
            userName,
            password: uglyPassword,
            sex,
            phone,
          },
        });
        return {
          ok: true,
        };
      } catch (e) {
        return {
          ok: false,
          error: "회원가입에 실패하였습니다. 관리자에게 문의해주세요.",
        };
      }
    },
  },
};
