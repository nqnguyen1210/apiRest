// utilisation du Model Membre pour faire le lien avec la BD 
var UserModel = require('../models/UserModel'); 

// d�finition du controller sous la forme d'un objet JS avec des propri�t�s 
var UserController = {

    liste: function (req, res) {
        // m�thode qui renvoie la liste des membres 
        UserModel.find()
            .then((users) => {
                if (users == null) {
                    res.json({ "status": false, "message": "aucun utilisateur" });
                }
                else {
                    res.json({ "status": true, "user": users });
                }
            });
    },

    ajout: function (req, res) {
        // m�thode qui renvoie un membre a partir son id
        var newUser = new UserModel(req.body);
        newUser.validate()
            .then(() => {
                return newUser.save() // retour d�une promesse
            })
            .then(() => res.json({ "status": true, "message": "utilisateur ajoute" }))
            .catch((err) => res.json({ "status": false, "message": err.message }))
    }
}

// interface du module 
module.exports = UserController;