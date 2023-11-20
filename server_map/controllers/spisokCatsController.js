const { SpisokCat } = require("../models/models");

class SpisokCatsController {
  async getAll(req, res) {
    const locality = await SpisokCat.findAll();
    return res.json(locality);
  }
}

module.exports = new SpisokCatsController();
