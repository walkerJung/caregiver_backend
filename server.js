require("dotenv").config();
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema.js";
import { getUser } from "./application/common/utils";

const PORT = process.env.PORT;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async (ctx) => {
    if (ctx.req) {
      return {
        loggedInUser: await getUser(ctx.req.headers.token),
      };
    } else {
      const {
        connection: { context },
      } = ctx;
      return {
        loggedInUser: context.loggedInUser,
      };
    }
  },
});

const app = express();
server.applyMiddleware({ app });
app.listen({ port: PORT }, () => {
  console.log(`🚀Server is running on http://localhost:${PORT} ✅`);
});
