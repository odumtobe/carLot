const express = require ('express')

const {
    getEmployees, 
    getEmployeeById,
    updateEmployeeById ,
    deleteEmployeeById,
    postEmployee,
} = require ('../controllers/employees')

const employeeRouter = express.Router()

employeeRouter.get("/", getEmployees);
employeeRouter.get("/:id",getEmployeeById)
employeeRouter.post("/", postEmployee)
employeeRouter.delete("/:id", deleteEmployeeById)
employeeRouter.patch("/:id", updateEmployeeById)

module.exports = employeeRouter