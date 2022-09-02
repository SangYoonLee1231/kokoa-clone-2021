const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    // 플러그인 인스턴스 생성
    new HtmlWebpackPlugin({
      /** 플러그인 옵션 설정 * */
      // 문서 타이틀
      title: 'Webpack 러닝 가이드',
      // 문서 메타
      meta: {
        // <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        'X-UA-Compatible': {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge',
        },
        // <meta name="theme-color" content="#4285f4" />
        'theme-color': '#4285f4',
      },
      // 파비콘
      favicon: 'favicon.svg',
    }),
  ],
};
