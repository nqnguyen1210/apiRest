// utilisation d'un routeur Express 
var express = require('express'); 
var membreRouter = express.Router(); 

// utilisation du controlleur de gestion des membres 
var membresController = require('../controllers/MembreController'); 

// route pour la liste des membres utilisant la méthode liste du controlleur 
membreRouter.get('/', membresController.liste); 
membreRouter.get('/:id', membresController.getMembre);
membreRouter.post('/', membresController.addMembre);
membreRouter.put('/', membresController.updateMembre);
membreRouter.delete('/:id', membresController.deleteMembre);

// interface du module 
module.exports = membreRouter;