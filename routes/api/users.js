const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route('/:user')
    .get(userController.getUserData);

router.route('/')
    .post(userController.createUser);

router.route('/login')
    .post(userController.loginUser);    
module.exports = router;