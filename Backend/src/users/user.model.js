const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  passwoed: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("passwoed")) return next();

});
const User = mongoose.model("User", userSchema);
module.exports = User;
