//使用在webpackDevServer.config.js  第84行
const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(proxy("/api", {
        target: "https://www.octlr.com",
        changeOrigin: true,
        pathRewrite: {
            "^/api": "/api"
        },

    }));
    app.use(proxy('/music', {
        target: 'https://www.octlr.com',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/music": "/music"
        },
    }));
};