import client from "../../client";

export default {
  Query: {
    viewCaregiverInfo: (_, { userCode }) => {
      try {
        const caregiverInfo = client.caregiverInfo.findUnique({
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
