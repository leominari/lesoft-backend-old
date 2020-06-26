const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  name: String,
  type: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Colaborator", PostSchema);
