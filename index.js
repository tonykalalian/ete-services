//:Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
//Import dependencies
const express = require("express");
const connectToDb = require("./config/db");
const employeeController = require("./controllers/employeeController");
const cors = require("cors");
//Create an express app
const app = express();
app.use(cors());
//configure express app
app.use(express.json());
//connect to database
connectToDb();
//Routing
app.get("/employee/list", employeeController.fetchEmployees);
app.get("/employee/list/:id", employeeController.fetchSingleEmployee);
app.post("/employee/post", employeeController.createEmployee);
app.put("/employee/update/:id", employeeController.updateEmployee);
app.delete("/employee/delete/:id", employeeController.deleteEmployee);
//Start our server
app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
