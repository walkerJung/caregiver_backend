import jwt from "jsonwebtoken";
import client from "../client";

export const getUser = async (token) => {
  try {
    console.log("token:" + token);
    if (!token) {
      return null;
    }
    const userId = await jwt.verify(token, process.env.SECRET_KEY);
    console.log(userId);
    const user = await client.user.findFirst({ where: { code } });
    if (user) {
      return user;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};

export function protectedResolver(ourResolover) {
  return function (root, args, context, info) {
    if (!context.loggedInUser) {
      const query = info.operation.operation === "query";
      if (query) {
        return null;
      } else {
        return {
          ok: false,
          error: "Please log in to perform this action.",
        };
      }
    }
    return ourResolover(root, args, context, info);
  };
}
