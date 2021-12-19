import client from "../../client";

export default {
  Announcement: {
    announcementApplication: ({ code }) => {
      return client.announcementApplication.findMany({
        where: { announcementCode: code },
      });
    },
    user: ({ userCode }) => {
      return client.user.findUnique({
        where: { code: userCode },
      });
    },
  },
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
    caregiverInfo: ({ userCode }) => {
      return client.caregiverInfo.findUnique({
        where: { code: userCode },
      });
    },
  },
  Query: {
    listAnnouncement: async (_, { userCode, status, take, skip }) => {
      try {
        if (userCode) {
          const announcements = await client.announcement.findMany({
            skip,
            take,
            where: {
              userCode,
            },
            include: {
              announcementApplication: {
                include: {
                  user: {
                    include: {
                      CaregiverInfo: true,
                    },
                  },
                },
              },
              user: true,
            },
            orderBy: {
              code: "desc",
            },
          });
          const count = await client.announcement.count({
            where: {
              userCode,
            },
          });
          return {
            announcements,
            count,
            result: true,
          };
        } else if (status) {
          const announcements = await client.announcement.findMany({
            skip,
            take,
            where: {
              status,
            },
            include: {
              announcementApplication: {
                include: {
                  user: true,
                },
              },
              user: true,
            },
            orderBy: {
              code: "desc",
            },
          });
          const count = await client.announcement.count({
            where: {
              status,
            },
          });
          return {
            announcements,
            count,
            result: true,
          };
        } else {
          const announcements = await client.announcement.findMany({
            include: {
              announcementApplication: {
                include: {
                  user: true,
                },
              },
              user: true,
            },
            orderBy: {
              code: "desc",
            },
          });
          const count = await client.announcement.count();
          return {
            announcements,
            count,
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
