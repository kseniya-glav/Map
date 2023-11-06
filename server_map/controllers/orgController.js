const {Organization} = require('../models/models')

class OrgController {

    async create(req, res){
        const {name, locality_name, numb_house, numb_housing, numb_flat, 
            type_org_name, category_help_name, fio_director, email, phone, 
            work_schedule, additional_data, coordinates, status_name, email_notifications} = req.body

        const org = await Organization.create({name, locality_name, numb_house, numb_housing, numb_flat, 
            type_org_name, category_help_name, fio_director, email, phone, 
            work_schedule, additional_data, coordinates, status_name, email_notifications})
            
        return res.json(org)
    }

    async getAll(req, res){
        const org = await Organization.findAll()
        return res.json(org)
    }

    async getOne(req, res) {
        const {id} = req.params
        const org = await Organization.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            },
        )
        return res.json(org)
    }
}

module.exports = new OrgController()