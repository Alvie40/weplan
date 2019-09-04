const mongoose = require("mongoose");
const { Schema } = mongoose;

const ExperienceSchema = new Schema({
  title: String,
  imageUrl: String,
  totalValue: Number,
  amountReceived: { type: Number, default: 0 }
});

module.exports = mongoose.model("Experience", ExperienceSchema);
