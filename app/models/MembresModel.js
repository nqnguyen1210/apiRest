// utilisation de MongoDB 
var mongoose = require('mongoose');
mongoose.Promise = global.Promise; 

let Schema = mongoose.Schema;
let membreSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    annee: { type: Number, required: true },
    nom: { type: String, required: true, uppercase: true },
    prenom: { type: String, required: false, uppercase: true },
    categorie: { type: String, enum: ['Senior', 'Junior'] },
    sexe: { type: String, enum: ['Hommes', 'Femmes'] },
    cnu: String,
    discipline: String,
    corps: String,
    academie: [{
        code_academie: { type: Number, required: true },
        nom: { type: String, required: true }
    }],
    region: [{
        code_region: Number,
        nom: String
    }],
    etablissement: String
});

// le model MongoDB faisant le lien avec la collection 
var MembreModel = mongoose.model("membre", membreSchema); 

// interface du module 
module.exports = MembreModel; 