import client from "../../client";

export default {
  Query: {
    viewProfile: (_, { code }) =>
      client.user.findMany({
        where: {
          code,
        },
        include: {
          CaregiverInfo: true,
        },
      }),
  },
};
