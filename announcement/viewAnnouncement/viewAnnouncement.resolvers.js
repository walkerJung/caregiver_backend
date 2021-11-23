import client from "../../client";

export default {
  Query: {
    viewAnnouncement: async (_, { code }) => {
      try {
        const announcement = await client.announcement.findUnique({
          where: {
            code,
          },
          include: {
            announcementApplication: true,
            user: true,
          },
        });

        return announcement;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
