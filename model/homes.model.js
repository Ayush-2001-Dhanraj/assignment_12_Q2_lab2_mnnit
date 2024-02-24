const mongoose = require("mongoose");

//  (homeowner,
// address, description, price, square footage of the house, number of bedrooms,
// number of bathrooms, the year the home was built, image URL for a house,
// availability,

const homesSchema = mongoose.Schema({
  name: String,
  owner: String,
  address: String,
  description: String,
  pincode: String,
  sqfeet: Number,
  nBedrooms: Number,
  nBathrooms: Number,
  buildYear: Date,
  price: Number,
  homeImage: String,
  status: {
    type: String,
    enum: ["available", "sold", "off"],
    default: "available",
  },
  category: {
    type: String,
    enum: ["single", "two", "condo", "rental"],
    default: "two",
  },
});

module.exports = mongoose.model("home", homesSchema);
