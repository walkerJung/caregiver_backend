import client from "../../client";

export default {
  Query: {
    listAnnouncement: async (_, { userCode, status }) => {
      try {
        if (userCode) {
          const announcements = await client.announcement.findMany({
            where: {
              userCode,
            },
          });
          return {
            announcements,
            result: true,
          };
        } else if (status) {
          const announcements = await client.announcement.findMany({
            where: {
              status,
            },
          });
          return {
            announcements,
            result: true,
          };
        } else {
          const announcements = await client.announcement.findMany();
          return {
            announcements,
            result: true,
          };
        }
      } catch (e) {
        return {
          result: false,
        };
      }
    },
  },
};
