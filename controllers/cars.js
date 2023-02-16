
const carModel = require('../models/cars');

const getCars = (req, res) => {
    carModel.find()

    .then(cars => {
        res.json(cars)
    })

    .catch(err => {
        console.log(err)
        res.send(err)
    })
}

const getCarById = (req, res) => {
    const id = req.params.id
    carModel.findById(id)
    .then(car => {
        res.status(200).json(car)
    }).catch(err => {
        console.log(err),
        res.status(404).send(err)
    }
)};

const postCar = (req, res) => {
    const car = req.body
    car.createAt = new Date()
    carModel.create(car) 
    .then(car => {
        res.status(200).json(car)
    })
    .catch(err => {
        console.log(err),
        res.status(500).send(err)
    })
}

const updateCarById = (req, res) => {
    const id = req.params.id

    const Car = req.body

    Car.lastUpdateAt = new Date()

    carModel.findByIdAndUpdate(id, Car, {new: true})

    .then(newCar => {
        res.status(200).send(newCar)
    })
    .catch (eer => {
        console.log(err)
        res.status(500).send(eer)
    })
}

const deleteCarById = (req, res) => {

    const id = req.params.id
    carModel.findByIdAndRemove(id)
    .then(Car => {
        res.status(200).send("deleted successfully")
    })
    .catch(err => {

        console.log(err)
        res.status(500).send(err)
    })
}

module.exports = {
    getCars, 
    getCarById,
    updateCarById ,
    deleteCarById,
    postCar,
}