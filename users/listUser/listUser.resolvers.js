import { prisma } from ".prisma/client";
import client from "../../client";

export default {
  Query: {
    listUser: async (_, { type, skip, take }) => {
      try {
        const users = await client.user.findMany({
          skip,
          take,
          where: {
            userType: type,
          },
          include: {
            caregiverInfo: true,
          },
        });
        const count = await client.user.count({
          where: {
            userType: type,
          },
        });
        return {
          users,
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
