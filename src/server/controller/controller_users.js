/**
 * Aqui se incluyen las funciones relacionadas con la creacion y modificacion de usuarios asi como de su login.
 */

//conexion a DB
const pool = require('../settings/db');
//encriptacion de las contraseñas
var bcrypt = require('bcrypt');
const { use } = require('passport');
var User = require('../models/model_user');
var saltRouds = 10;

var userValidation =  async (req, res) => {
  const { username, password } = req.body;
  try {
    let user = await User.findOne({
      username
    });
    if (!user)
      return res.status(400).json({
        message: "User Not Exist"
      });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({
        message: "Incorrect Password !"
      });

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      "randomString",
      {
        expiresIn: 3600
      },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          token
        });
      }
    );
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Server Error"
    });
  }
};


var userCreation = async (req, res) => {
  const {
      username,
      edad,
      mail
  } = req.body;
  try {
      let user = await User.findOne({
          username
      });
      
      if (user) {
          console.log("user already exists");
          return res.status(400).json({
              msg: "User Already Exists"
          });
      }

      user = new User({
          username,
          edad,
          mail
      });
/*
      //encriptamos la constraseña en la base de datos
      console.log("encripting password");
      const salt = await bcrypt.genSalt(saltRouds);
      user.mail = await bcrypt.hash(password, salt);
*/
      
      await user.save();
      console.log("user registered");
      return res.status(200).send(user);

     
  } catch (err) {
      console.log(err.message);
      console.error("error in saving User");
      res.status(500).send(err);
  }
};

let listUsers = async (req, res) => {

  const model = await User.find({});

  User.countDocuments({},(err, total)=>{ //contamos si hay o no respuesta
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

module.exports= {
  userCreation,
  userValidation,
  listUsers
};