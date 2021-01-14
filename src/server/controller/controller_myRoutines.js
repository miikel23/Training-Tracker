//const express = require('express');

//modelos BD
var Ejercicio = require('../models/model_ejercicio');
const Rutina = require('../models/model_rutina');
//conexion a DB
const pool = require('../settings/db');

//------------------------------obtener-----------------------------------------------
/* Devuelve todos los ejercicios de la BBDD
 * @param {*} req request 
 * @param {*} res respuesta 
 */
let listEjerciciosAll = async (req, res) => {

  const model = await Ejercicio.find({});

  Ejercicio.countDocuments({},(err, total)=>{ //contamos si hay o no respuesta
    if(err){
      return res.send.json({
        status: 400,
        mensaje: "error al leer el archivo",
        err
      })
    }else{
      console.log(model);
      return res.json({
        status: 200,
        total,
        model
      })
    }
  })
};

/**
 * muestra los ejercicios creados por el usuario
 * @param {*} req 
 * @param {*} res 
 */
let listEjerciciosAllMine = async (req, res) => {
  const { nombre, descripcion, username } = req.body;

    const model = await Ejercicio.find({
      or:[
        {nombre},
        {descripcion}
      ],
      $and:[
        {username}
      ]
    })
      Ejercicio.countDocuments({},(err, total)=>{
        if(err){
          return res.send.json({
            status: 400,
            mensaje: "error al leer el archivo",
            err
          })
        }else{
          console.log(model);
          return res.json({
            status: 200,
            total,
            model
          })
        }
        c
      })
};


/**
 * Metodo para buscar uno o varios ejercicios especificos
 * @param {*} req request con los datos de busqueda solicitados
 * @param {*} res respuesta 
 */
let listEjercicios = async (req, res) => {

  //obtenemos los datos de la request
  const { nombre } = req.body;

  //buscamos todo aquello que haga match
  const model = await Ejercicio.find({
      nombre   
  });

  Ejercicio.countDocuments({
      nombre
  },(err, total)=>{ //contamos si hay o no respuesta
    if(err){
      return res.send.json({
        status: 400,
        mensaje: "error al leer el archivo",
        err
      })
    }else{
      console.log(model);
      return res.json({
        status: 200,
        total,
        model
      })
    }
  })
};

/**
 * Devuelve las rutinas creadas por un usuario
 * @param {*} req 
 * @param {*} res 
 */
let listRutinasAllMine = async (req, res) => {
  const {nombre,descripcion,username} = req.body;
  const model = await Rutina.find({
    $or:[
      {nombre},
      {descripcion}
    ],
    $and:[
      {username}
    ]
  });
    Rutina.countDocuments({
      $or:[
        {nombre},
        {descripcion},
        {username}
      ],
      $and: [
        {public}
      ]
    },(err, total)=>{
      if(err){
        return res.send.json({
          status: 400,
          mensaje: "error al leer el archivo",
          err
        })
      }else{
        console.log(model);
        return res.json({
          status: 200,
          total,
          model
        })
      }
    })
};

/**
 * devuelve todas las rutinas de la BD
 * @param {*} req 
 * @param {*} res 
 */
let listRutinasAll = async (req, res) => {

  const model = await Rutina.find({});
    Rutina.countDocuments({},(err, total)=>{
      if(err){
        return res.send.json({
          status: 400,
          mensaje: "error al leer el archivo",
          err
        })
      }else{
        console.log(model);
        return res.json({
          status: 200,
          total,
          model
        })
      }
    })
};

/**
 * metodo para buscar rutinas en la base de datos
 * @param {*} req 
 * @param {*} res 
 */
let listRutinas = async (req, res) => {
  const {nombre,descripcion,username, public} = req.body;

  const model = await Rutina.find({
    $or:[
      {nombre},
      {descripcion},
      {username}
    ],
    $and: [
      {public}
    ]
  });
    Rutina.countDocuments({
      $or:[
        {nombre},
        {descripcion},
        {username}
      ],
      $and: [
        {public}
      ]
    },(err, total)=>{
      if(err){
        return res.send.json({
          status: 400,
          mensaje: "error al leer el archivo",
          err
        })
      }else{
        console.log(model);
        return res.json({
          status: 200,
          total,
          model
        })
      }
    })
};

let listEjerciciosWEB = async (req, res) => {
  const model = await Ejercicio.find()
    Ejercicio.countDocuments({},(err, total)=>{
      if(err){
          res.send.json({
          status: 400,
          mensaje: "error al leer el archivo",
          err
        })
      }
      res.render('index', { Ejercicio })
    })
};

let listRutinasWEB = async (req, res) => {
  const model = await Rutina.find()
    Rutina.countDocuments({},(err, total)=>{
      if(err){
        return res.send.json({
          status: 400,
          mensaje: "error al leer el archivo",
          err
        })
      }
      res.render('index', { Ejercicio })
    })
};






//------------------------Crear --------------//
var submitEjercicio = async (req, res) => {
  const {
      nombre,
      descripcion,
      duracion,
      username,
      public
      
  } = req.body;
  try {
    let ejercicio = await Ejercicio.findOne({
      $and:[
        {nombre},
        {descripcion}
      ]
    });
    if (ejercicio) {
        console.log("exercise already exists");
        return res.status(400).json({
            msg: "Exercise Already Exists"
        });
    }

    ejercicio = new Ejercicio({
        nombre,
        descripcion,
        duracion,
        username,
        public
    });
    
    await ejercicio.save();
    console.log("exercise submitted succesfully");
    return res.status(200).send(ejercicio);

  } catch (err) {
      console.log(err.message);
      console.error("error in saving exercise");
      res.status(500).send(err);
  }
};

/**
 * Metodo para crear rutinas en la base de datos, toma como valor repetidi aquella entrada cuyo nombre y descripcion coincidan
 * @param {*} req 
 * @param {*} res 
 */
var submitRutina = async (req, res) => {
  const {nombre, descripcion, username,public, listaEjercicios} = req.body;
  try {
    let rutina = await Rutina.findOne({
      //usamos and porque no nos importa si es el mismo con una descripcion ligeramente diferente
      $and:[
        {nombre},
        {descripcion},
        {public}
      ]  
    });

    if (rutina) {
        console.log("routine already exists");
        return res.status(400).json({
            msg: "Routine Already Exists"
        });
    }

    rutina = new Rutina({
        nombre,
        descripcion,
        username,
        public,
        listaEjercicios
    });

    await rutina.save();
    console.log("routine submitted succesfully");
    return res.status(200).send(rutina);

  } catch (err) {
      console.log(err.message);
      console.error("error in saving routine");
      res.status(500).send(err);
  }
};

//----------------------Borrar---------------------
var deleteRutina = async (req, res) => {
  const {_id} = req.body;
  try {
    let rutina = await Rutina.findOneAndDelete({_id});

    if (!rutina) {
        console.log("routine does not exist!");
        return res.status(400).json({
            msg: "routine does not exist"
        });
    }

    console.log("routine deleted succesfully");
    return res.status(200).json({
        msg: "routine deleted succesfully"
    });

  } catch (err) {
      console.log(err.message);
      console.error("error in saving exercise");
      res.status(500).send(err);
  }
};

var deleteEjercicio = async (req, res) => {
  const {_id} = req.body;
  try {
    let ejercicio = await Ejercicio.findOneAndDelete({_id});

    if (!ejercicio) {
        console.log("exercise does not exist!");
        return res.status(400).json({
            msg: "exercise does not exist"
        });
    }

    console.log("exercise deleted succesfully");
    return res.status(200).json({
        msg: "exercise deleted succesfully"
    });

  } catch (err) {
      console.log(err.message);
      console.error("error in saving exercise");
      res.status(500).send(err);
  }
};

//----------------------------update-------------------------------------------------
var updateRutina = async (req, res) => {
  const {_id} = req.body;
  try {
    let rutina = await Rutina.findOneAndUpdate({_id}, req.body);
    console.log("routine updated succesfully");
    return res.status(200).send(rutina);

  } catch (err) {
      console.log(err.message);
      console.error("error in updating routine");
      res.status(500).send(err);
  }
};

var updateEjercicio = async (req, res) => {
  const {nombre} = req.body;
  try {
    let ejercicio = await Ejercicio.findOneAndUpdate({nombre}, req.body);
    console.log("execise updated succesfully");
    return res.status(200).send(ejercicio);

  } catch (err) {
      console.log(err.message);
      console.error("error in updating exercise");
      res.status(500).send(err);
  }
};
//exportamos las funciones para hacer uso de ellas
module.exports = {
//ejercicios
  listEjercicios,
  listEjerciciosAllMine,
  listEjerciciosAll,
  listEjerciciosWEB,
  submitEjercicio,
  deleteEjercicio,
  updateEjercicio,

  //rutinas
  listRutinas,
  listRutinasWEB,
  listRutinasAllMine,
  listRutinasAll,
  submitRutina,
  deleteRutina,
  updateRutina
};