const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "Shop",
  },
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
});

module.exports = mongoose.model("Customer", customerSchema);
