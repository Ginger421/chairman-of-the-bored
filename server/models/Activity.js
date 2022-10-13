const { Schema, model } = require("mongoose");

// ///////////////Activity Schema IS NOT BEING REQUIRED ANYWHERE AS OF 10/8, It is only set up  to mirror the api at the moment/////////////////////
const activitySchema = new Schema({
  // this is the key for the activity in the API response
  key: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  participants: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
  },
  link: {
    type: String,
  },
  accessibility: {
    type: Number,
  },
});

module.exports = model("Activity", activitySchema);
