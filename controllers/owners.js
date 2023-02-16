const owners = require('../models/owners');
const ownerModel = require('../models/owners');

const getOwners = (req, res) => {
    ownerModel.find()

    .then(owners => {
        res.json(owners)
    })

    .catch(err => {
        console.log(err)
        res.send(err)
    })
}

const getOwnerById = (req, res) => {
    const id = req.params.id

ownerModel.findById(id)

.then(owner => {
    res.status(200).json(owner)
}).catch(err => 
    console.log(err),
    res.status(404).send(err)
)};

const postOwner = (req, res) => {
    const owner = req.body
    owner.createAt = new Date()
    ownerModel.create(owner) 
    .then(owner => {
        res.status(200).json(owner)
    })
    .catch(err => {
        console.log(err),
        res.status(500).send(err)
    })
}

const updateOwnerById = (req, res) => {
    const id = req.params.id

    const owner = req.body

    owner.lastUpdateAt = new Date()

    ownerModel.findByIdAndUpdate(id, owner, {new: true})

    .then (newOwner => {
        res.status(200).send(newOwner)
    })
    .catch (eer => {
        console.log(err)
        res.status(500).send(err)
    })
}

const deleteOwnerById = (req, res) => {

    const id = req.params.id
    ownerModel.findByIdAndRemove(id)
    .then(owner => {
        res.status(200).send("deleted successfully")
    })
    .catch(err => {

        console.log(err)
        res.status(500).send(err)
    })
}

module.exports = {
    getOwners, 
    getOwnerById,
    updateOwnerById ,
    deleteOwnerById,
    postOwner,
}