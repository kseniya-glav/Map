const { SpisokCat } = require("../models/models");

class SpisokCatsController {
  async getAll(req, res) {
    const locality = await SpisokCat.findAll();
    return res.json(locality);
  }

  async adding(req, res, next) {
    const { category_help_name, name} = req.body;
    
    const organizationName = name;
    const sps = category_help_name?.forEach(categoryName => {
      SpisokCat.create({categoryName, organizationName})
    });

    return res.json(sps);
  }

  async update(req, name, category_help_name) {

    await SpisokCat.destroy({  where: { name: name } });

    const sps = category_help_name?.forEach(categoryName => {
      SpisokCat.create({categoryName, name})
    });

    return res.json(sps);
  }

}


module.exports = new SpisokCatsController();
