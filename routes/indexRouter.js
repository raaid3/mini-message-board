const { Router } = require("express");

const indexRouter = Router();

// message database
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.userName,
    added: new Date(),
  });
  res.redirect("/");
});

indexRouter.use("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

module.exports = { indexRouter };
