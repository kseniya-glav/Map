const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/models");

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    const { email, password, role, fio, phone } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Некорректный email или password"));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(
        ApiError.badRequest("Пользователь с таким email уже существует")
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      fio,
      email,
      phone,
      roleName: role,
      password: hashPassword,
    });
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal("Пользователь не найден"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal("Указан неверный пароль"));
    }
    const token = generateJwt(user.id, user.email, user.roleName);
    return res.json({ token });
  }

  async check(req, res, next) {
    const user = await User.findOne({ where: { email: req.user.email } });
    const token = generateJwt(req.user.id, req.user.email, user.roleName);
    return res.json({ token });
  }

  async getAll(req, res) {
    const user = await User.findAll({
      attributes: { exclude: ["password"] },
    });

    return res.json(user);
  }

  async delete(req, res) {
    const { id } = req.params;

    const data = await User.destroy({
      where: {
        id: id,
      },
    });
    return res.json(!!data);
  }

  async update(req, res, next) {
    const data = req.body;
    const { id } = req.params;
    if (data.email) {
      const emailAlreadyExists = !!(await User.findOne({
        where: { email: data.email },
      }));

      if (emailAlreadyExists) {
        return next(
          ApiError.internal("Пользователь с такой почтой уже существует")
        );
      }
    }

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 5);
    }

    const request = await User.update(data, {
      where: {
        id: id,
      },
    });

    return res.json(!!request[0]);
  }
}

module.exports = new UserController();
