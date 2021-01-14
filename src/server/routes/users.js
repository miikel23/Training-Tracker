var express = require('express');
var router = express.Router();
var usersController = require('../controller/controller_users');
const passport = require('passport');

//previous login signup functionality

router.post('/create', async function(req, res){
    await usersController.userCreation(req,res);

});
router.post('/logIn', passport.authenticate('login'), async function(req, res){
    await usersController.userValidation(req,res);

});
 

router.get('/users',usersController.listUsers);

module.exports = router;