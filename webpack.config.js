const path = require("path");

module.exports = {
  mode: "none", // production, development, production
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    //loader
    rules: [
      {
        test: /\.css$/, //css파일에 대해서
        use: ["style-loader", "css-loader"], //이로더를 적용하겠다.
      },
    ],
  },
};
