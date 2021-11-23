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

        const choiceAnnouncementApplication =
          await client.announcementApplication.findFirst({
            where: {
              announcementCode: announcement.code,
              confirm: true,
            },
            include: {
              user: true,
            },
          });
        return announcement, choiceAnnouncementApplication;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
