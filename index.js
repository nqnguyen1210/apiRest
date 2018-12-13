let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

var app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/collegefrance",{ useNewUrlParser: true});

/* Se connecter à votre BD MongoDB du Collège de France */
let db = mongoose.connection;
db.on('error', console.error.bind(console,'erreur connexion :'));
db.once('open', function() {
	console.log('Connecté')
});

var router = express.Router();
app.use(router);
router.get('/', function(req,res) {
	res.json({message:"Bienvenue sur le serveur REST de l’API du Collège de France"})
});



// utilisation du router pour la gestion de membres 
var routerMembre = require("./app/routers/MembresRouter"); 
app.use('/api/membres',routerMembre); 

// utilisation du router pour la gestion de utilisateurs 
var routeurUsers = require("./app/routers/UserRouter");
app.use('/api/users', routeurUsers); 

// lancer le serveur pour qu'il écoute sur le port 5000 
var port = 5000; 
app.listen(port); 
console.log('le serveur REST est lancé sur le port ' + port);
