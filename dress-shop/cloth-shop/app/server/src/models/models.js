const sequelize = require('../db');
const { DataTypes } = require ('sequelize');

const user = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
});

const basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const basketCloth = sequelize.define('basket_cloth', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const cloth = sequelize.define('cloth', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false}
});

const type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
});

const cloth_info = sequelize.define('cloth_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
});

user.hasOne(basket);
basket.belongsTo(user);

basket.hasMany(basketCloth);
basketCloth.belongsTo(basket);

type.hasMany(cloth);
cloth.belongsTo(type);

cloth.hasMany(basketCloth);
basketCloth.belongsTo(cloth);

cloth.hasMany(cloth_info, {as: 'info'});
cloth_info.belongsTo(cloth);

module.exports = {
    user,
    basket,
    basketCloth,
    cloth,
    type,
    cloth_info,
};