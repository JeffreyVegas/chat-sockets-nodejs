const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const myShema = new Schema({
  message: {
    type: String,
    require: true,
  },
  user: {
    type: Schema.ObjectId,
    ref: "User",
    require: true,
  },
  chat: {
    type: Schema.ObjectId,
    ref: "Chat",
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const model = mongoose.model("Message", myShema);
module.exports = model;
