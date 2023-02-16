const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const CarSchema = new Schema({
    brand: {
        type: String,
        required: true,
    },

    model: {
        type: String,
        required: true,
    },

    year: {
        type: Number,
        required: true,
    },

    reg_num: {
        type: String,
        required: true,
    },

    color: {
        type: String,
        required: true,
    },

    transmission: {
        type: String,
        required: true,
    },

    body_style: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('cars', CarSchema)