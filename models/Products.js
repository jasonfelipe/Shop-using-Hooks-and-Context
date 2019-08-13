var Sequelize = require('sequelize');

var sequelize = require('../config/connection.js');

var Products = sequelize.define("Storefront_Products", {
    name: Sequelize.STRING,
    quality: Sequelize.INTEGER,
    price: Sequelize.INTEGER
},
{
 freezeTableName: true,
 tableName: 'Storefront_Products',
 timestamps: false
});

Products.sync();

module.exports = Products;