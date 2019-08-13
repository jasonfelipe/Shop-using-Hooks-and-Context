const db = require('../models/');

module.exports = {

    getInfo: function(req,res){

        const productName = req.params.productName

        console.log("Going to back end.");
        db.Products.findAll({
            where: {
                name: productName
            }
        }).then(dbModel => {
            res.send(dbModel);
            console.log('TEST Login success inside userController');
        }).catch(err => res.status(422).json(err));

        
        
    },

    createProduct: function(req,res){
        
        let product = {
            name: req.params.productName,
            quantity: req.params.quantity,
            price: req.params.price
        }

        db.Products.create({product}).then(dbModel => {
            res.send(dbModel);
            console.log("TESTING CREATION");

        }).catch(err => res.status(422).json(err));

    }
}