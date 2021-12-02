import { loadFilesSync, mergeResolvers, mergeTypeDefs } from "graphql-tools";
import { GraphQLUpload } from "graphql-upload";

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const loadedResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.js`);

export const typeDefs = mergeTypeDefs(loadedTypes);
export const resolvers = mergeResolvers(loadedResolvers, {
  Upload: GraphQLUpload,
});
