//modelo para almacenar ejercicios
var { Schema, model } = require('mongoose');
const ObjectId = Schema.ObjectId;
 
const Ejercicio = new Schema({
  nombre: {type: String, required:[true, "Nombre de ejercicio obligatorio"]},
  descripcion: String,
  duracion: {type: Number}, 
  username: {type: String},
  public: {type: Boolean, required:true, default: false}
},{
  timestamps: true,
});

module.exports = model('ejercicios', Ejercicio);