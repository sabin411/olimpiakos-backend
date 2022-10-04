module.exports = {
    routes: [
        {
            method: "GET",
            path: "/videos/:embedId",
            handler: "video.findOne",
            config: {
                auth: false,
            },
        },
    ],
};
