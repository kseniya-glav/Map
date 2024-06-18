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

  async delete(req, res) {
    const { id } = req.params;

    const data = await Notice.destroy({
      where: {
        id: id,
      },
    });
    return res.json(!!data);
  }
}

module.exports = new NoticeController();
