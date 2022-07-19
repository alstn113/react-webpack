const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { ProvidePlugin } = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  // webpack의 진입점이다.
  entry: "./src/index.tsx",
  // webpack은 javascript와 json만 이해하기 때문에 module를 사용하여 다른 유형의 파일로 처리함.
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/, // ts, tsx, js, jsx 파일을 만날 경우
        use: "babel-loader", // 변환에 사용되는 loader
        exclude: /node_modules/, // 제외 항목
      },
    ],
  },
  // 로더가 할 수 없는 다른 작업을 수행할 목적으로 제공된다.
  plugins: [
    // html 파일 생성시켜준다.
    new HtmlWebpackPlugin({
      template: `./public/index.html`,
    }),
    // 모듈을 import할 필요없게 해준다.
    new ProvidePlugin({
      React: "react",
    }),
    // .env 사용을 위함이다.
    new Dotenv(),
  ],
  // resolve는 모듈 요청 해석 옵션이다.
  resolve: {
    // 모듈 이름 별칭 목록이다.
    alias: {
      "@": path.resolve(__dirname, "../src/"),
    },
    // 사용되는 확장자이다.
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
  },
};
