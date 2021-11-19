import client from "../../client";

export default {
  Query: {
    listNotice: async (_) => {
      try {
        const notices = await client.notice.findMany();
        console.log(notices);
        return {
          notices,
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
