import { buildSubgraphSchema } from "@apollo/subgraph";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginInlineTraceDisabled } from "@apollo/server/plugin/disabled";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./typedefs";
import { resolvers } from "./resolvers";

const mainServer = (async function () {
  const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
    plugins: [ApolloServerPluginInlineTraceDisabled()],
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 5002 },
  });

  console.info(`🚀 Server ready at ${url}graphql`);
})();

mainServer;
