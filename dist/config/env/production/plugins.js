module.exports = {
    graphql: {
        config: {
            endpoint: "/graphql",
            shadowCRUD: true,
            playgroundAlways: true,
            depthLimit: 30,
            amountLimit: 100,
            apolloServer: {
                tracing: false,
            },
        },
    },
};
