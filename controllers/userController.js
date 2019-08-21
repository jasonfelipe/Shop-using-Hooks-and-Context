const db = require('../models/');


//bcrypt stuff
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);



module.exports = {

    getUserData: function(req,res) {

        let user = req.params.username;

        console.log("Going to back end.");
        db.Users.findAll({
            where: {
                user: user
            }
        }).then(dbModel => {
            res.send(dbModel);
            console.log('TEST Login success inside userController');
        }).catch(err => res.status(422).json({err: err, reason: 'password or username is wrong'}));

        
        
    },

    loginUser: function (req, res){
        
        let user = {
            username: req.body.username,
            password: bcrypt.compareSync(req.body.password, hash)
        }
        db.Users.findall({
            where : {
                user
            }
        }).then(dbModel =>
            res.send(dbModel)
        );
    },

    createUser: function(req, res){
        console.log("HEllo?", req.body);

        let user = {
            firstname: req.body.firstName,
            lastname: req.body.lastName,
            username:req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, salt),
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        console.log("THE USER", user);

        db.Users.create(user).then(dbModel => {
            res.send(dbModel);
        }).catch(err => res.status(422).json(err));

    }
};