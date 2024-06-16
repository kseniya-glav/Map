const { Notice } = require("../models/models");

class NoticeController {
  async getAll(req, res) {
    const notice = await Notice.findAll();
    return res.json(notice);
  }

  async adding(req, res) {
    const newNotice = Notice.create(req.body);
    return res.json(newNotice);
  }
}

module.exports = new NoticeController();
