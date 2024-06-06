const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, autoIncrement: true },
  email: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  phone: { type: DataTypes.STRING },
  fio: { type: DataTypes.STRING },
  roleName: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING },
});

const Role = sequelize.define("role", {
  id: { type: DataTypes.INTEGER, autoIncrement: true },
  name: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
});

const Organization = sequelize.define("organization", {
  id: { type: DataTypes.INTEGER, autoIncrement: true },
  name: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  localityName: { type: DataTypes.STRING },
  street: { type: DataTypes.STRING },
  numb_house: { type: DataTypes.STRING },
  numb_housing: { type: DataTypes.STRING },
  numb_flat: { type: DataTypes.STRING },
  typeOrgName: { type: DataTypes.STRING },
  fio_director: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  work_schedule: { type: DataTypes.JSON },
  additional_data: { type: DataTypes.TEXT },
  coordinates: { type: DataTypes.ARRAY(DataTypes.FLOAT) },
  statusName: { type: DataTypes.BOOLEAN },
});

const Locality = sequelize.define("locality", {
  id: { type: DataTypes.INTEGER, autoIncrement: true },
  name: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  coordinates: { type: DataTypes.ARRAY(DataTypes.FLOAT), allowNull: false },
});

const Type_org = sequelize.define("type_org", {
  id: { type: DataTypes.INTEGER, autoIncrement: true },
  name: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
});

const Category = sequelize.define("category", {
  id: { type: DataTypes.INTEGER, autoIncrement: true },
  name: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  color: { type: DataTypes.STRING, allowNull: false },
});

const SpisokCat = sequelize.define("spisok_cat", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  categoryName: { type: DataTypes.STRING },
  organizationName: { type: DataTypes.STRING },
});

const Notice = sequelize.define("notice", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  email_notifications: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  message: { type: DataTypes.JSON, allowNull: false },
});

Role.hasMany(User);
User.belongsTo(Role, { foreignKey: "roleName" });

Locality.hasMany(Organization);
Organization.belongsTo(Locality, { foreignKey: "localityName" });

Type_org.hasMany(Organization);
Organization.belongsTo(Type_org, { foreignKey: "typeOrgName" });

Category.hasMany(SpisokCat);
SpisokCat.belongsTo(Category, { foreignKey: "categoryName" });

Organization.hasMany(SpisokCat);
SpisokCat.belongsTo(Organization, { foreignKey: "organizationName" });

module.exports = {
  Role,
  User,
  Locality,
  Type_org,
  Category,
  Organization,
  SpisokCat,
  Notice,
};
