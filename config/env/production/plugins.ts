module.exports = {
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 40,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
};
