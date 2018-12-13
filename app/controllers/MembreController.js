// utilisation du Model Membre pour faire le lien avec la BD 
var MembreModel= require('../models/MembresModel'); 

// définition du controller sous la forme d'un objet JS avec des propriétés 
var MembreController = { 
	liste : function(req, res) {    

		// méthode qui renvoie la liste des membres 
		MembreModel.find()
		.then((membres) => {
			if (membres == null) {
				res.json({"status":false,"message":"aucun membre"});
			}
			else {
				res.json({"status":true,"membre":membres});
			}
		});
	},	

	getMembre : function(req, res) {    

		// méthode qui renvoie un membre a partir son id 
		MembreModel.findOne({id:req.params.id})
		.then((membre) => {
			if (membre == null) {
				res.json({"status":false,"message":"membre inexistant"});
			}
			else {
				res.json({"status":true,"membre":membre});
			}
		});
	},
	
    addMembre: function (req, res) {

        // méthode qui renvoie un membre a partir son id
        var newMembre = new MembreModel(req.body);
        newMembre.validate()
            .then(() => {
                return newMembre.save() // retour d’une promesse
            })
            .then(() => res.json({ "status": true, "message": "membre ajoute" }))
            .catch((err) => res.json({ "status": false, "message": err.message }))
	},

    updateMembre: function (req, res) {

        // méthode qui renvoie un membre a partir son id
        MembreModel.updateOne({ id: req.body.id }, req.body)
            .then((status) => res.json({ "status": true, "message": "membre modifie" }))
            .catch((err) => res.json({ "status": false, "message": err.message }))
	},
	
	deleteMembre : function(req, res) {    

		// méthode qui renvoie un membre a partir son id 
		MembreModel.deleteOne({id:req.params.id})
		.then((result) => {
			if (result == false) {
				res.json({"status":false,"message":"membre inexistant"});
			}
			else {
				res.json({"status":true,"message":"membre supprime"});
			}
		});
	}
}  
		
// interface du module 
module.exports = MembreController;