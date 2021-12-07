import client from "../../client";

export default {
  Query: {
    listNotice: async (_, { take, skip }) => {
      try {
        const notices = await client.notice.findMany({
          skip,
          take,
          orderBy: {
            code: "desc",
          },
        });
        const count = await client.notice.count();
        return {
          notices,
          count,
          result: true,
        };
      } catch (e) {
        return {
          result: false,
        };
      }
    },
  },
};
