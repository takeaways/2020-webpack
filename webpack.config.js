// var path = require("path");
// var MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//   mode: "none",
//   entry: "./index.js",
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         // use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"],
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
//   // plugins: [new MiniCssExtractPlugin()], //결과물의 정보를 바꾸는 구나
// };
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",
  entry: "./index.js",
  output: {
    filename: "[chuckhash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
      template: "index.html",
    }),
  ],
};
