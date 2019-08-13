const db = require('../models/');

module.exports = {

    login: function(req,res){

        let user = {
            username: req.params.username,
            password: req.params.password

        }

        console.log("Going to back end.");
        db.Users.findAll({
            where: {
                user: user
            }
        }).then(dbModel => {
            res.send(dbModel);
            console.log('TEST Login success inside userController');
        }).catch(err => res.status(422).json(err));

        
        
    },

    createUser: function(req,res){
        
        let user = {
            firstName: req.params.firstName,
            lastName: req.params.lastName,
            username:req.params.username,
            email: req.params.email,
            password: req.params.password
        }

        db.Users.create({user}).then(dbModel => {
            res.send(dbModel);
            console.log("TESTING CREATION");

        }).catch(err => res.status(422).json(err));

    }
}