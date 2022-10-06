const { Schema } = require("mongoose");

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

module.exports = activitySchema;
