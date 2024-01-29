const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const EmailSchema = new Schema({
  email: {
    type: String,
    /*trim: true,
    lowercase: true,
    unique: true,*/
    required: "Email address is required",
  },
});

module.exports = mongoose.model("Email", EmailSchema);