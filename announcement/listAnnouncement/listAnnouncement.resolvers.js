import client from "../../client";

export default {
  Query: {
    listAnnouncement: async (_) => {
      try {
        const announcements = await client.announcement.findMany();
        return {
          announcements,
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
