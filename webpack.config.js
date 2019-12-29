const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

// eslint-disable-next-line max-len
const WriteFileWebpackPlugin = require("./node_modules/write-file-webpack-plugin/dist/WriteFileWebpackPlugin.js");

const isProd = process.env.NODE_ENV === "production"; // true or false
const cssDev = ["style-loader", "css-loader", "sass-loader"];
const cssProd = ExtractTextPlugin.extract({
  fallback: "style-loader",
  use: ["css-loader", "sass-loader"],
  publicPath: "/"
});
const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "script/[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: ["file-loader?name=[name].[ext]&outputPath=images/", "image-webpack-loader"]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    open: false,
    historyApiFallback: true
  },
  plugins: [
    // new CopyPlugin([
    //   {
    //     from: './src/**/*js',
    //     to: 'dist/[hash].[ext]',
    //     force: true,
    //   },
    // ]),
    new WriteFileWebpackPlugin({
      test: /\.json$/,
      useHashIndex: false
    }),
    new HtmlWebpackPlugin({
      title: "web developer | Half marathon runner | bookworm | simple-minded | overthinker",
      hash: true,
      template: "./src/template/index.html",
      minify: {
        collapseWhitespace: false
      }
    }),
    new ExtractTextPlugin({
      filename: "style/style.css",
      disable: !isProd,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
