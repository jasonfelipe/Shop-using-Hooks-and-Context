const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route('/:user')
    .get(userController.login);

module.exports = router;