const express = require("express");
const path = require("path");
const app = express();

// PORT
const PORT = 3000;

// setting up templating engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", (req, res) => {
  res.render("test");
});

app.listen(PORT, () => {
  console.log(`Connected on port: ${PORT}!`);
});
