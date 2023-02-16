const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    gender: {
        type: String,
        required: true,
    },

    race: {
        type: String,
        required: true,
    },

    height: {
        type: String,
        required: true,
    },

    dob: {
        type: String,
        required: true,
    },

    maritalStatus: {
        type: String,
        rquired: true,
    }
});

module.exports = mongoose.model('employees', EmployeeSchema)