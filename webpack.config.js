const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(svg|png|jpe?g|webp|avif|woff2)$/i,
        exclude: /assets[\\/]favicons[\\/]/,
        type: "asset/resource",
      },
      {
        test: /assets[\\/]favicon\.ico$/,
        type: "asset/resource",
        generator: { filename: "[name][ext]" },
      },
      {
        test: /assets[\\/]favicons[\\/]/,
        type: "asset/resource",
        generator: { filename: "favicons/[name][ext]" },
      },
    ],
  },
};
