const Sequelize = require('sequelize');

const sequelize = require('../config/connection.js');

const Users = sequelize.define("users", {
    username: {
        type: Sequelize.STRING,
        unique: true
    },
    password: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    favProducts: {
        type:Sequelize.STRING,
        get() {
            return this.getDataValue('favColors').split(';')
        },
        set(val) {
           this.setDataValue('favColors',val.join(';'));
        },
    }
},
    {
        freezeTableName: true,
        tableName: 'users',
        timestamps: true
    });



Users.sync();


module.exports = Users;