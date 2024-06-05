const ApiError = require("../error/ApiError");
const { Organization } = require("../models/models");

class OrgController {
  async create(req, res) {
    const {
      name,
      locality_name,
      numb_house,
      numb_housing,
      numb_flat,
      type_org_name,
      category_help_name,
      fio_director,
      email,
      phone,
      work_schedule,
      additional_data,
      coordinates,
      status_name,
      email_notifications,
    } = req.body;

    const org = await Organization.create({
      name,
      locality_name,
      numb_house,
      numb_housing,
      numb_flat,
      type_org_name,
      category_help_name,
      fio_director,
      email,
      phone,
      work_schedule,
      additional_data,
      coordinates,
      status_name,
      email_notifications,
    });

    return res.json(org);
  }

  async getAll(req, res) {
    const org = await Organization.findAll();
    return res.json(org);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const org = await Organization.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: "info" }],
    });
    return res.json(org);
  }

  async delete(req, res) {
    const { id } = req.params;

    const data = await Organization.destroy({
      where: {
        id: id,
      },
    });
    return res.json(!!data);
  }

  async update(req, res, next) {
    const data = req.body;
    const { id } = req.params;
    if (data.name) {
      const nameAlreadyExists = !!(await Organization.findOne({
        where: { name: data.name },
      }));

      if (nameAlreadyExists) {
        return next(
          ApiError.internal("Такая организация уже существует")
        );
      }
    }


    const request = await Organization.update(data, {
      where: {
        id: id,
      },
    });

    return res.json(!!request[0]);
  }


  async adding(req, res, next) {
    const { name, locality_name, street, numb_house, numb_housing, numb_flat,
      type_org_name, category_help_name, fio_director, email, phone, work_schedule,
      additional_data, coordinates, status_name } = req.body;

      const localityName = locality_name
      const typeOrgName = type_org_name
      const statusName = status_name

    const candidate = await Organization.findOne({ where: { name } });
    if (candidate) {
      return next(
        ApiError.badRequest("Организация уже добавлена")
      );
    }

    const org = await Organization.create({
      name, localityName, street, numb_house, numb_housing, numb_flat,
      typeOrgName, fio_director, email, phone, work_schedule,
      additional_data, coordinates, statusName
    });

    return res.json(org);
  }
}

module.exports = new OrgController();
