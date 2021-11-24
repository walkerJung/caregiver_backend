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

        const caregiverInfo = await client.caregiverInfo.findUnique({
          where: {
            userCode: code,
          },
        });

        // 간병인 회원인 경우 간병인정보와 간병 지원내역 삭제
        if (user.userType === "간병인") {
          await client.caregiverInfo.delete({
            where: {
              code: caregiverInfo.code,
            },
          });
          await client.announceApplication.deleteMany({
            where: {
              userCode: code,
            },
          });
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
        console.log(e);
        return {
          ok: false,
          error: "회원 삭제에 실패하였습니다. 관리자에게 문의해주세요.",
        };
      }
    },
  },
};
