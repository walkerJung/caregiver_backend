import client from "../../client";

export default {
  Query: {
    viewAnnouncement: async (_, { code }) => {
      try {
        const announcement = await client.announcement.findUnique({
          where: {
            code,
          },
        });
        return announcement;
      } catch (e) {
        return false;
      }
    },
  },
};
