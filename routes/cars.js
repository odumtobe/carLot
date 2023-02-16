const express = require ('express')

const {
    getCars, 
    getCarById,
    updateCarById ,
    deleteCarById,
    postCar,
} = require ('../controllers/cars')

const carRouter = express.Router()

carRouter.get("/", getCars);
carRouter.get("/:id", getCarById)
carRouter.post("/", postCar)
carRouter.delete("/:id", deleteCarById)
carRouter.patch("/:id", updateCarById)

module.exports = carRouter