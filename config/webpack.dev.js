const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = merge(common, {
  mode: "development", // default:"production"이고, 내장된 환경별 최적화를 할 수 있다.
  devtool: "inline-source-map",
  devServer: {
    open: true, // 웹 자동 열어줌
    hot: true, // HMR : hot module replacement
    compress: true, // gzip 압축 활성화
    port: 3000, // 열리는 port
    historyApiFallback: true, // 404일때 index.html을 표시하려면 true, 복수의 경로를 적용하려면 객체
    liveReload: true, // 실시간 변경사항 불러옴
  },
  plugins: [new BundleAnalyzerPlugin()], // 번들 최적화
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
        // sass -> css -> style과 같이 오른쪽에서 왼쪽 순으로 실행된다.
      },
    ],
  },
});
