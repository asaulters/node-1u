const http = require("http");

const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("1st Middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("2nd Middleware");
// });

app.use("/users", (req, res, next) => {
  res.send("<h1> Users Page</h1>");
  console.log("Users page");
});
app.use("/", (req, res, next) => {
  res.send("<h1> Root Page</h1>");
  console.log("root page");
});

app.listen(3000);
