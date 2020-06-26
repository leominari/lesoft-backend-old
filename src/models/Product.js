const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  name: String,
  value: Number,
  unity: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", PostSchema);
