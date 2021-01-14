//modelo para almacenar rutinas
var { Schema, model } = require('mongoose');
const ObjectId = Schema.ObjectId;


const Rutina = new Schema({
  nombre: {type: String, required:[true, "Nombre obligatorio"]},
  descripcion: String,
  username: String,
  public:{type: Boolean, required:true, default: false},
  listaEjercicios: [] //TODO: como crear una lista de ejercicios para este modelo
},{
  timestamps: true,
});

module.exports = model('rutinas', Rutina);