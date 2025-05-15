const db = require("../db/queries");

async function newMessagePost(req, res) {
  await db.addMessage(req.body.messageText, req.body.userName, new Date());
  res.redirect("/");
}

async function messageDetailsGet(req, res) {
  const message = await db.getMessageById(req.params.messageId);
  res.render("messageDetails", { message: message });
}

async function messagesGet(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Message Board", messages: messages });
}

module.exports = {
  newMessagePost,
  messageDetailsGet,
  messagesGet,
};
