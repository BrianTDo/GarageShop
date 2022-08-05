const mongoose = require("mongoose");

const shopSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "User",
  },
  name: {
    type: String,
    require: [true, "Please enter in Shop name"],
  },
  customers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

module.exports = mongoose.model("Shop", shopSchema);
