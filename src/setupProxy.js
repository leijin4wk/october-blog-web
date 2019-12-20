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
};