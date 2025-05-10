const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");

const indexRouter = Router();

// message database
messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: uuidv4(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: uuidv4(),
  },
];

function lookupMessage(id) {
  return messages.find((element) => element.id === id);
}

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.userName,
    added: new Date(),
    id: uuidv4(),
  });
  res.redirect("/");
});

indexRouter.use("/messageDetails/:messageId", (req, res, next) => {
  const message = lookupMessage(req.params.messageId);
  console.log(message);
  res.render("messageDetails", { message: message });
  // next();
});

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

indexRouter.use((req, res) => {
  res.status(404).send("Page not found :/");
});

module.exports = { indexRouter };
