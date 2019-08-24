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
        console.log("THIS REQ.BODY LOGIN LOL", req.body);
        db.Users.findOne({
            where : {
                username: req.body.username,
            }
        }).then(dbModel =>
            {
                if (dbModel === null){
                    return res.send({error: "Username not found!"});
                }
                console.log("Starting hash check...");
                console.log(bcrypt.compareSync(req.body.password, dbModel.dataValues.password));
                if (bcrypt.compareSync(req.body.password, dbModel.dataValues.password)){
                    return res.send("accepted");
                } else {
                    console.log("Hello?");
                    return res.send({error: "Wrong Username or Password!"});
                }

            }
        ).catch(err => res.status(422).json(err));
    },

    createUser: function(req, res){
        console.log("HEllo?", req.body);

        let user = {
            firstname: req.body.firstName,
            lastname: req.body.lastName,
            username:req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, salt),
        };

        console.log("THE USER", user);

        db.Users.create(user).then(dbModel => {
            res.send(dbModel);
        }).catch(err => 
            {if (err.name == 'SequelizeUniqueConstraintError'){
                return res.send({
                    error: "Username Or Email already in use!"});
            }
            return res.status(422).json(err);
        });

    }
};