// require mongoose
const mongoose = require("mongoose");

// require Schema
const Schema = mongoose.Schema;

// create user Schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: Number,
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
  { collection: "users" }
);

// export schema
module.exports = User = mongoose.model("User", userSchema);
