import client from "../../client";

export default {
  Query: {
    listAnnouncement: async (_) => {
      const announcements = await client.announcement.findMany();
    },
  },
};
