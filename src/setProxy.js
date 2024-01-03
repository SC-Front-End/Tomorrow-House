const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://mini.jh1105.xyz:5305',
      changeOrigin: true,
    })
  );
};
//     withCredentials: true,  // 자격 증명을 요청에 포함