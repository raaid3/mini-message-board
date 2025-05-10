const express = require("express");
const path = require("path");
const { indexRouter } = require("./routes/indexRouter");

const app = express();

// PORT
const PORT = process.env.PORT || 3000;

// setting up templating engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middleware to parse form content
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Connected on port: ${PORT}!`);
});
