const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: ["react-hot-loader/patch", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: "./dist",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: ({ htmlWebpackPlugin }) =>
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

          <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
          
          <title>Frontend Mentor | Order summary card</title>

          <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
          <style>
            .attribution { font-size: 11px; text-align: center; }
            .attribution a { color: hsl(228, 45%, 44%); }
          </style>
        </head>
        <body>
          <main id=\"app\"></main>
          <div class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">Your Name Here</a>.
          </div>
        </body>
        </html>
      `,
      filename: "index.html",
    }),
  ],
};

module.exports = config;
