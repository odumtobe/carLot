const express = require ('express')

const {
    getOwners, 
    getOwnerById,
    updateOwnerById ,
    deleteOwnerById,
    postOwner,
} = require ('../controllers/owners')

const ownerRouter = express.Router()

ownerRouter.get("/", getOwners);
ownerRouter.get("/:id",getOwnerById)
ownerRouter.post("/", postOwner)
ownerRouter.delete("/:id", deleteOwnerById)
ownerRouter.patch("/:id", updateOwnerById)

module.exports = ownerRouter