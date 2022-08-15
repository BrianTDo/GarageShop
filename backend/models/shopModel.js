const mongoose = require("mongoose");

const shopSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    name: {
      type: String,
      require: [true, "Please enter in Shop name"],
    },
    address: {
      type: String,
      require: [true, "Please enter in address"],
    },
    city: {
      type: String,
      require: [true, "Please enter in city"],
    },
    state: {
      type: String,
      require: [true, "Please enter in state"],
    },
    zip: {
      type: String,
      require: [true, "Please enter in zip code"],
    },
    phone: {
      type: String,
      require: [true, "Please enter in phone number"],
    },
    active: {
      type: Boolean,
      require: true,
    },
    description: {
      type: String,
      require: false,
    },
    customers: [{type: mongoose.Schema.Types.ObjectId, ref:"Customer"}],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Shop", shopSchema);
