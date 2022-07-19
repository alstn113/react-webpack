const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = merge(common, {
  mode: "production",
  devtool: "cheap-module-source-map",
  // 생성된 번들의 파일이름과 내보낼 위치를 지정한다.
  output: {
    filename: "[name].[contenthash].js", // 파일 이름
    path: path.resolve(__dirname, "../dist"), // 내보낼 위치
    publicPath: "./", // public의 위치
    clean: true, // 내보내기 전에 output 파일 정리한다.
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({ analyzerMode: "static" }),
    new MiniCssExtractPlugin(),
  ],

  // 추가 플러그인 목록
  optimization: {
    // 모듈에서 사용하는 export를 확인하고
    // 사용하지 않는 항목을 제거
    usedExports: true,
    // 출력 파일 최소화
    minimize: true,
    // 출력 파일에 사용할 최소화 도구
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: "all",
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
