var Sequelize = require('sequelize');

var sequelize = require('../config/connection.js');

var Users = sequelize.define("users", {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING

},
{
 freezeTableName: true,
 tableName: 'users',
 timestamps: true
});

Users.sync();

module.exports = Users;