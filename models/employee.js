const mongoose = require("mongoose");
//Definining the schema
const employeeSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    enum: ["Lebanon", "Dubai", "UK", "Canada", "India", "Other"],
    required: true,
  },
});
const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
