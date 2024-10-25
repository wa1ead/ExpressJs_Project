const express = require("express");
const router = express.Router();
const path = require("path");

const publicPath = path.join(__dirname, "views");

router.get("/", (req, res) => {
  res.sendFile(`${publicPath}/Services.html`);
});

module.exports = router;
