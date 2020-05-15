// common babel config for the server and the client
module.exports = {
  // tell webpack to run babel on every file it runs through  module: {
  module: {
    rules: [
      {
        test: /\.js?$/, // apply babel to ony js files
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }],
          ],
        },
      },
    ],
  },
};
