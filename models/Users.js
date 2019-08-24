const Sequelize = require('sequelize');

const sequelize = require('../config/connection.js');

const Users = sequelize.define("users", {
    username: {type: Sequelize.STRING,
               unique: true
    },
    password: Sequelize.STRING,
    email: {type: Sequelize.STRING,
            unique: true
    },
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