import client from "../../client";

export default {
  Query: {
    listUser: async (_) => {
      try {
        const users = await client.user.findMany({
          include: {
            CaregiverInfo: true,
          },
        });
        return {
          users,
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
