import { prisma } from ".prisma/client";
import client from "../../client";

export default {
  Query: {
    listUser: async (_, { type, skip, first }) => {
      try {
        const users = await client.user.findMany({
          skip,
          take: first,
          where: {
            userType: type,
          },
          include: {
            CaregiverInfo: true,
          },
        });
        const count = await prisma.user.count({
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
