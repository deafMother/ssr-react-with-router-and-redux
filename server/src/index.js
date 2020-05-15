//  the root file for the ppication on the server
// we are running webpack with babel so we can use es6 modules in node as well

// const express = require("express");
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const Home = require("./client/components/Home").default;
import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

// this is necessary to send the client bundle
app.use(express.static("public"));

app.get("*", (req, res) => {
  // '*' means to handle all routes
  const store = createStore();

  // some logic to initialize and load data into the store

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log("listen on port 3000");
});

// https://react-ssr-api.herokuapp.com/
