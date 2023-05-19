const express = require("express");
const app = express();
app.get("/gadgets", (request, response) => {
  response.sendfile("./gadgets.html", { root: __dirname });
  console.log(request);
});
module.exports = app;
