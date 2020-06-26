const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  idAccount: String,
  description: String,
  value: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transaction", PostSchema);
