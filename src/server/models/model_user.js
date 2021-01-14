//modelo para almacenar ejercicios
//var { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const ObjectId = mongoose.ObjectId;
 
const User = new mongoose.Schema({
  username: {type: String, required:[true, "Nombre de usuario obligatorio"], unique: true},
  edad:{type:Number},
  mail: {type: String, required:[true, "Mail obligatorio"], unique: true}

},{
  timestamps:true,
});
module.exports = mongoose.model('usuarios', User);