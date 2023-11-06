const {Locality} = require('../models/models')

class LocalityController {

    async create(req, res){
        const {name, coordinates} = req.body
        const locality = await Locality.create({name, coordinates})
        console.log(locality)
        return res.json(locality)
    }
    async getAll(req, res){
        const locality = await Locality.findAll()
        return res.json(locality)

    }
}

module.exports = new LocalityController()