// utilisation d'un routeur Express 
var express = require('express');
var routeurUser = express.Router();

// utilisation du controlleur de gestion des membres 
var usersController = require('../controllers/UserController');

// route pour la liste des membres utilisant la méthode liste du controlleur 
routeurUser.get('/', usersController.liste);
routeurUser.post('/', usersController.ajout);

// interface du module 
module.exports = routeurUser;