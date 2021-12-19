import client from "../../client";

export default {
  Query: {
    viewProfile: (_, { code }) => {
      try {
        const user = client.user.findUnique({
          where: {
            code,
          },
          include: {
            caregiverInfo: true,
          },
        });
        return user;
      } catch (e) {
        return false;
      }
    },
  },
};
