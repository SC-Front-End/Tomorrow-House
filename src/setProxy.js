const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
        target: "http://localhost:8080",
      changeOrigin: true,
 
    })
  );
};

//     withCredentials: true,  // 자격 증명을 요청에 포함