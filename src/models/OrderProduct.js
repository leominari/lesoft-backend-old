const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  idOrder: String,
  idProduct: String,
  productPrice: Number,
  quantity: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("OrderProduct", PostSchema);
