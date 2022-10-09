const { Schema, model } = require("mongoose");
const activitySchema = require("./Activity");


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    // savedTasks: [activitySchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
