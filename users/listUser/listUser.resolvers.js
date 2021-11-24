import client from "../../client";

export default {
  Query: {
    listUser: async (_, { type }) => {
      try {
        const users = await client.user.findMany({
          where: {
            userType: type,
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
