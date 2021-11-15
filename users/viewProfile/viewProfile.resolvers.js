import client from "../../client";

export default {
  Query: {
    viewProfile: (_, { code }) => {
      try {
        const user = client.user.findUnique({
          where: {
            code,
          },
        });
        return user;
      } catch (e) {
        return false;
      }
    },
  },
};
