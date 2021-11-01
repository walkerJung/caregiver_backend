import client from "../../client";

export default {
  Mutation: {
    writeNotice: async (_, { title, content }) => {
      try {
        var writeIP = ""; // IP 주소
        require("dns").lookup(
          require("os").hostname(),
          function (err, add, fam) {
            writeIP = add;
          }
        );
        await client.notice.create({
          data: {
            title,
            content,
          },
        });
        return {
          ok: true,
        };
      } catch (e) {
        return {
          ok: false,
          error: "공지사항 등록에 실패하였습니다. 관리자에게 문의해주세요.",
        };
      }
    },
  },
};
