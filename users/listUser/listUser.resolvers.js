import client from "../../client";

export default {
  Query: {
    listUser: async (_, { type }) => {
      try {
        const users = await client.user.findMany({
          where: {
            type,
          },
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
