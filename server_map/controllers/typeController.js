const {Type_org} = require('../models/models')

class TypeController {

    async create(req, res){
        const {name} = req.body
        const type = await Type_org.create({name})
        return res.json(type)
    }

    async getAll(req, res){
        const type = await Type_org.findAll()
        return res.json(type)
    }
}

module.exports = new TypeController()