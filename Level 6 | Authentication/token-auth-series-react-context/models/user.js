const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema ({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
},
  password: {
      type: String,
      required: true
  },
  memberSince: {
    type: Date,
    default: Date.now
  },
  // In case we need to distinguish types of users in the future
  isAdmin: {
      type: Boolean,
      default: false
  }
})
module.exports = mongoose.model("User", UserSchema)