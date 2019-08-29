const db = require('../models/');

module.exports = {

    getInfo: function(req,res){
        const productId = req.params.product
        console.log(productId);
        db.Products.findAll({
            where: {
                id: productId
            }
        }).then(dbModel => {
            console.log('TEST Login success inside userController');
            res.send(dbModel);
        }).catch(err => res.status(422).json(err));
    },

    createProduct: function(req,res){
        
        let product = {
            name: req.params.productName,
            quantity: req.params.quantity,
            price: req.params.price
        }

        db.Products.create(product).then(dbModel => {
            console.log("TESTING CREATION");
            res.send(dbModel);

        }).catch(err => res.status(422).json(err));

    },

    getAllProducts: function(req, res){
        db.Products.findAll().then(dbModel => {
            res.send(dbModel);
        }).catch(err => res.status(422).json(err));
    }
}