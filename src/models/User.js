const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  idColaborator: String,
  user: String,
  password: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", PostSchema);