const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bored", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
);
console.log(`Connected to MongoDB!`.cyan.underline.bold);

module.exports = mongoose.connection;
