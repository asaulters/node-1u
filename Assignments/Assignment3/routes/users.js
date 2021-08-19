const path = require("path");

const express = require("express");
const router = express.Router();
const rootDir = "../util/path.js";

router.get("/users", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "users.html"));
});

router.post("/users", (req, res, next) => {
  console.log(res.body);
  res.redirect("/users");
});

module.exports = router;
