const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, autoIncrement: true},
    email: {type: DataTypes.STRING, primaryKey: true, unique: true},
    phone: {type: DataTypes.STRING},
    fio: {type: DataTypes.STRING},
    roleName: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING}
})

const Role = sequelize.define('role', {
    id: {type: DataTypes.INTEGER, autoIncrement: true},
    name: {type: DataTypes.STRING, primaryKey: true, unique: true},
})

const Organization = sequelize.define('organization', {
    id: {type: DataTypes.INTEGER, autoIncrement: true},
    name: {type: DataTypes.STRING, primaryKey: true, unique: true},
    localityName: {type: DataTypes.STRING},
    numb_house: {type: DataTypes.INTEGER},
    numb_housing: {type: DataTypes.INTEGER},
    numb_flat: {type: DataTypes.INTEGER},
    typeOrgName: {type: DataTypes.STRING},
    fio_director: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    work_schedule: {type: DataTypes.ARRAY(DataTypes.TIME)},
    additional_data: {type: DataTypes.TEXT},
    coordinates: {type: DataTypes.ARRAY(DataTypes.FLOAT)},
    statusName: {type: DataTypes.STRING},
    email_notifications: {type: DataTypes.STRING}
})

const Locality = sequelize.define('locality', {
    id: {type: DataTypes.INTEGER, autoIncrement: true},
    name: {type: DataTypes.STRING, primaryKey: true, unique: true},
    coordinates: {type: DataTypes.ARRAY(DataTypes.FLOAT)}
})

const Type_org = sequelize.define('type_org', {
    id: {type: DataTypes.INTEGER, autoIncrement: true},
    name: {type: DataTypes.STRING, primaryKey: true, unique: true},
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, autoIncrement: true},
    name: {type: DataTypes.STRING, primaryKey: true, unique: true},
    color: {type: DataTypes.STRING}
})

const Status = sequelize.define('status', {
    id: {type: DataTypes.INTEGER, autoIncrement: true},
    name: {type: DataTypes.STRING, primaryKey: true, unique: true},
})

const SpisokCat = sequelize.define('spisok_cat', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    categoryName: {type: DataTypes.STRING},
    organizationName: {type: DataTypes.STRING}
})

Role.hasMany(User)
User.belongsTo(Role, { foreignKey: 'roleName'})

Locality.hasMany(Organization)
Organization.belongsTo(Locality, { foreignKey: 'localityName'})

Type_org.hasMany(Organization)
Organization.belongsTo(Type_org, { foreignKey: 'typeOrgName'})

Status.hasMany(Organization)
Organization.belongsTo(Status, { foreignKey: 'statusName'})

Organization.hasMany(SpisokCat)
SpisokCat.belongsTo(Organization, {foreignKey: 'organizationName'})

Category.hasMany(SpisokCat)
SpisokCat.belongsTo(Category, {foreignKey: 'categoryName'})

module.exports = {
    Role,
    User,
    Locality,
    Type_org,
    Category,
    Status,
    Organization,
    SpisokCat
}