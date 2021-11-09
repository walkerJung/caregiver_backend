import client from "../../client";

export default {
  Query: {
    viewProfile: (_, { userId }) =>
      client.user.findUnique({
        where: {
          userId,
        },
      }),
  },
};
