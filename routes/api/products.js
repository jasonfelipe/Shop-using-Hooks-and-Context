const router = require("express").Router();
const productController = require("../../controllers/productController");

router.route('/:product')
    .get(productController.getInfo)

router.route('/')
    .get(productController.getAllProducts)

module.exports = router;