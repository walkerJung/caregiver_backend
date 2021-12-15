import client from "../../client";

export default {
  AnnouncementApplication: {
    announcement: ({ announcementCode }) => {
      return client.announcement.findUnique({
        where: { code: announcementCode },
      });
    },
    user: ({ userCode }) => {
      return client.user.findUnique({
        where: { code: userCode },
      });
    },
  },
  Query: {
    listAnnouncementApplication: async (
      _,
      { userCode, status, take, skip }
    ) => {
      try {
        const announcementApplications =
          await client.announcementApplication.findMany({
            skip,
            take,
            where: {
              userCode,
            },
            include: {
              announcement: true,
            },
            orderBy: {
              code: "desc",
            },
          });
        const count = await client.announcementApplication.count({
          where: {
            userCode,
          },
        });
        return {
          announcementApplications,
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
