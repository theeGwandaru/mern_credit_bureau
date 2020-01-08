var express = require('express');
var router = express.Router();
const userController = require('../controllers/UserController');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/activate/:token',userController.validateToken);

router.put('/', userController.updateUser)

module.exports = router;
