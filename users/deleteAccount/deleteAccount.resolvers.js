import client from "../../client";

export default {
  Mutation: {
    deleteAccount: async (_, { code }) => {
      try {
        if (!code) {
          throw new Error("잘못된 접근입니다.");
        }
        const user = await client.user.findUnique({
          where: {
            code,
          },
        });
        if (!user) {
          throw new Error("이미 삭제된 회원입니다.");
        }
        await client.user.delete({
          where: {
            code,
          },
        });
        return {
          ok: true,
        };
      } catch (e) {
        return {
          ok: false,
          error: "회원 삭제에 실패하였습니다. 관리자에게 문의해주세요.",
        };
      }
    },
  },
};
