import client from "../../client";

export default {
  Query: {
    viewCaregiverInfo: (_, { userCode }) => {
      try {
        const caregiverInfo = client.user.findUnique({
          where: {
            userCode,
          },
        });
        return caregiverInfo;
      } catch (e) {
        return false;
      }
    },
  },
};
