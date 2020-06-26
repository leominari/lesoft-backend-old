const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  idUser: String,
  token: String,
  valid: Boolean,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UserToken", PostSchema);
