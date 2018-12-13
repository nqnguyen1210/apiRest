// utilisation de MongoDB 
var mongoose = require('mongoose');
mongoose.Promise = global.Promise; 

let Schema = mongoose.Schema;
let userSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    mail: { type: String, required: true, unique: true },
    admin: { type: Boolean, default: false }
});

// le model MongoDB faisant le lien avec la collection 
var UserModel = mongoose.model("users", userSchema);

// interface du module 
module.exports = UserModel; 