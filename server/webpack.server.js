const path = require("path");
// require the base set up and merge it
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  // inform webpack that we are building a bundle
  // forn nodeJS, rateher than for the browser

  target: "node",

  // tell webpack the root file of our server application

  entry: "./src/index.js",
  // tell webpack where to put the out put file
  // that is generated
  // the server bundle will be executed in the server side just like
  // executing node server.js in traditional express servers
  // it will not be shipped to the client
  // only the client bundle will be shipped
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  // not include any files that are inside the node_modules foder inside the build server bundle
  externals: [webpackNodeExternals()],
};

// mege the two configs together

module.exports = merge(baseConfig, config);
