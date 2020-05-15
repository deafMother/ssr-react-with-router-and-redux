// we need a client bundles as well to make sure to ship JS to the client along with the HTML
// so that react wotks
const path = require("path");

// require the base set up and merge it
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const config = {
  // tell webpack the root file of our server application

  entry: "./src/client/client.js",
  // tell webpack where to put the out put file
  // that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};

module.exports = merge(baseConfig, config);
