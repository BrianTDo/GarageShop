const mongoose = require("mongoose");

const shopSchema = mongoose.Schema({
  id: {
    type: Number,
    require: true,
    unique: true,
  },
  text: {
    type: String,
    require: [true, "Please enter in text"],
  },
});

module.exports = mongoose.model("Shop", shopSchema);
