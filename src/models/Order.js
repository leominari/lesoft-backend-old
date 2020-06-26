const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  idColaborator: String,
  idSalesman: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", PostSchema);
