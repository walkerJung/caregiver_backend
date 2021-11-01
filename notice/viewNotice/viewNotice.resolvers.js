import client from "../../client";

export default {
  Query: {
    viewNotice: async (_, { code }) => {
      try {
        const notice = await client.notice.findUnique({
          where: {
            code,
          },
        });
        return notice;
      } catch (e) {
        return false;
      }
    },
  },
};
