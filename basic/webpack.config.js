const path = require("path");

module.exports = {
  mode: "none",
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].[chunkhash].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname),
        exclude: /(node_modules)|(dist)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
          },
        },
      },
    ],
  },
  devtool: "source-map",
};
