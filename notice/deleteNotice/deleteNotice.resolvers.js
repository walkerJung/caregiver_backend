import client from "../../client";

export default {
  Mutation: {
    deleteNotice: async (_, { code }) => {
      try {
        if (code) {
          throw new Error("잘못된 접근입니다.");
        }
        await client.notice.delete({
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
          error: "공지사항 삭제에 실패하였습니다. 관리자에게 문의해주세요.",
        };
      }
    },
  },
};
