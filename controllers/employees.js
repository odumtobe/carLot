const employees = require('../models/employees');
const employeeModel = require('../models/employees');

const getEmployees = (req, res) => {
    employeeModel.find()

    .then(employees => {
        res.json(employees)
    })

    .catch(err => {
        console.log(err)
        res.send(err)
    })
}

const getEmployeeById = (req, res) => {
    const id = req.params.id

employeeModel.findById(id)

.then(employee => {
    res.status(200).json(employee)
}).catch(err => {
        console.log(err),
        res.status(404).send(err)
    }
)};

const postEmployee = (req, res) => {
    const employee = req.body
    employee.createAt = new Date()
    
    employeeModel.create(employee) 
    .then(employee => {
        res.status(200).json(employee)
    })
    .catch(err => {
        console.log(err),
        res.status(500).send(err)
    })
}

const updateEmployeeById = (req, res) => {
    const id = req.params.id

    const employee = req.body

    employee.lastUpdateAt = new Date()

    employeeModel.findByIdAndUpdate(id, employee, {new: true})

    .then(newEmployee => {
        res.status(200).send(newEmployee)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
};

const deleteEmployeeById = (req, res) => {

    const id = req.params.id
    employeeModel.findByIdAndRemove(id)
    .then(employee => {
        res.status(200).send("deleted successfully")
    })
    .catch(err => {

        console.log(err)
        res.status(500).send(err)
    })
}

module.exports = {
    getEmployees, 
    getEmployeeById,
    updateEmployeeById ,
    deleteEmployeeById,
    postEmployee,
}