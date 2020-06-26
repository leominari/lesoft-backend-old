const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  cep: Number,
  street: String,
  number: Number,
  complement: String,
  neighborhood: String,
  city: String,
  state: String,
  country: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Address", PostSchema);
