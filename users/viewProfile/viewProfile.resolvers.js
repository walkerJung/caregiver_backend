import client from "../../client";

export default {
  Query: {
    viewProfile: (_, { code }) =>
      client.user.findUnique({
        where: {
          code,
        },
        include: {
          CaregiverInfo: true,
        },
      }),
  },
};
