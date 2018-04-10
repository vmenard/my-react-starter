const path = require("path")

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devServer: {
    host: "0.0.0.0",
    hot: true,
    inline: true,
    historyApiFallback: true
  },
  entry: "./src",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    publicPath: "/"
  },
  resolve: {
    modules: [
      path.resolve('node_modules'),
      path.resolve('./src'),
      path.resolve('./src/ui'),
    ],
    extensions: ['.js', '.jsx', '.scss'],
  }
}