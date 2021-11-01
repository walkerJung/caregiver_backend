import client from "../../client";

export default {
  Mutation: {
    editNotice: async (_, { code, title, content }) => {
      try {
        var writeIP = ""; // IP 주소
        require("dns").lookup(
          require("os").hostname(),
          function (err, add, fam) {
            writeIP = add;
          }
        );
        await client.notice.update({
          where: { code },
          data: {
            title,
            content,
            writeIP,
          },
        });
        return {
          ok: true,
        };
      } catch (e) {
        return {
          ok: false,
          error: "공지사항 수정에 실패하였습니다. 관리자에게 문의해주세요.",
        };
      }
    },
  },
};
