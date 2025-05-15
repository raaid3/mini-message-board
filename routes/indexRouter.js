const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");
const db = require("../db/queries");
const indexRouter = Router();
const indexController = require("../controllers/indexController");

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

indexRouter.post("/new", indexController.newMessagePost);

indexRouter.get(
  "/messageDetails/:messageId",
  indexController.messageDetailsGet
);

indexRouter.get("/", indexController.messagesGet);

indexRouter.use((req, res) => {
  res.status(404).send("Page not found :/");
});

module.exports = { indexRouter };
