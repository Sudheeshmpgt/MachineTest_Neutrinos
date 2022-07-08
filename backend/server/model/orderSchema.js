const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
  total_price: {
    type: Number,
    required: true,
  },
});

module.exports = OrderModel = mongoose.model("Order", orderSchema);
