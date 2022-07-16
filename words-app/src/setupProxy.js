// eslint-disable-next-line no-undef
const { createProxyMiddleware } = require('http-proxy-middleware');

// eslint-disable-next-line no-undef
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/itgirlschool', {
      target: 'http://itgirlschool.justmakeit.ru',
      changeOrigin: true,
      pathRewrite: {
        '/itgirlschool': '',
      },
    })
  );
  app.use(
    createProxyMiddleware('/pokeapi', {
      target: 'https://pokeapi.co',
      changeOrigin: true,
      pathRewrite: {
        '/pokeapi': '',
      },
    })
  );
};