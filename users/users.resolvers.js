import client from "../client";

export default {
  User: {
    caregiverInfo: ({ code }) => {
      return client.caregiverInfo.findUnique({
        where: {
          userCode: code,
        },
      });
    },
  },
};
