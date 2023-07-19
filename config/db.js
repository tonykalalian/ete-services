//:Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to database successfully");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectToDb;
