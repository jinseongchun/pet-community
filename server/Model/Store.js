const mongoose = require("mongoose");
const storeSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    price: Number,

    storeNum: Number,
    image: String,
    continent: {
      type: Number,
      default: 1,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { collection: "stores", timestamps: true }
);

const Store = mongoose.model("Store", storeSchema);

module.exports = { Store };
