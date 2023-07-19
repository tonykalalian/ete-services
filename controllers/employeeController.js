const Employee = require("../models/employee");

const fetchEmployees = async (req, res) => {
  //Find the employees
  const employees = await Employee.find();
  //Respond with them
  res.json({ employees });
};
const fetchSingleEmployee = async (req, res) => {
  try {
    // Get the id of this URL
    const employeeId = req.params.id;
    // Find the employee using this id
    const employee = await Employee.findById(employeeId);
    if (employee) {
      res.json({ employee });
    } else {
      res.json({ error: "Note not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
const createEmployee = async (req, res) => {
  //get the sent in data of request body
  const { fullName, email, age, country } = req.body;
  //create an employee with it
  const employee = await Employee.create({
    fullName,
    email,
    age,
    country,
  });
  //respond with the new employee
  res.json({ employee });
};
const updateEmployee = async (req, res) => {
  //Get the id of the url
  const employeeId = req.params.id;
  //Get the data of the req body
  const { fullName, email, age, country } = req.body;
  //Find and update the record
  await Employee.findByIdAndUpdate(employeeId, {
    fullName,
    email,
    age,
    country,
  });
  //Find updated employee
  const employee = await Employee.findById(employeeId);
  //Respond with it
  res.json({ employee });
};
const deleteEmployee = async (req, res) => {
  //Get the id of the url
  const employeeId = req.params.id;
  //Find and delete the record
  await Employee.findByIdAndDelete(employeeId);
  //Respond with it
  res.json({ message: "Employee has ben deleted successfully" });
};
module.exports = {
  fetchEmployees,
  fetchSingleEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
