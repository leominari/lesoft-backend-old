const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  idAccount: String,
  description: String,
  date: Date,
  value: Number,
  type: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("OrderProduct", PostSchema);
