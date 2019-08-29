var Sequelize = require('sequelize');

var sequelize = require('../config/connection.js');

var Products = sequelize.define("products", {
    name: Sequelize.STRING,
    quantity: Sequelize.INTEGER,
    price: Sequelize.INTEGER,
},
{
 freezeTableName: true,
 tableName: 'products',
 timestamps: true
});

Products.sync();

module.exports = Products;