const db = require('../models/');


//bcrypt stuff
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);



module.exports = {

    getUserData: function(req,res){

        let user = {
            username: req.params.username,
            password: bcrypt.compareSync(req.params.password, hash)
        }

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

    createUser: function(req,res){
        console.log(req.body);
        
        let user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username:req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, salt)
        }

        db.Users.create(user).then(dbModel => {
            res.send(dbModel);
            console.log("TESTING CREATION");
        }).catch(err => res.status(422).json(err));

    }
}