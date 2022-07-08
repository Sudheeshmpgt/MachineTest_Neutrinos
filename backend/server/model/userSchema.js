const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }

});

module.exports = UserModel = mongoose.model("User", userSchema);