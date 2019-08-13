var Sequelize = require('sequelize');

var sequelize = require('../config/connection.js');

var Users = sequelize.define("Storefront_Users", {
    user: Sequelize.STRING,
    password: Sequelize.STRING
},
{
 freezeTableName: true,
 tableName: 'Storefront_Users',
 timestamps: false
});

Users.sync();

module.exports = Users;