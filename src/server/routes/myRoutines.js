const express = require('express');
const myRoutinesController = require('../controller/controller_myRoutines');
const router = express.Router();


//------------------------Metodos GET--------------------------------------------------------------------
//ejercicios
router.get('/listEjercicios', myRoutinesController.listEjercicios);
router.get('/listEjerciciosAll', myRoutinesController.listEjerciciosAll);
router.get('/listEjerciciosAllMine', myRoutinesController.listEjerciciosAllMine); //devuelve todo, no utilizar
router.get('/listEjerciciosWEB', myRoutinesController.listEjerciciosWEB);

//rutinas
router.get('/listRutinas',myRoutinesController.listRutinas);


//---------------------------------Metodos POST------------------------------------------------------
router.post('/submitEjercicio', async function(req, res){
    await myRoutinesController.submitEjercicio(req,res);
});
router.post('/submitRutina', async function(req, res){
    await myRoutinesController.submitRutina(req,res);
});

//-------------------------------Metodos PUT--------------------------------------------------

router.put('/updateEjercicio', async function(req, res){
    await myRoutinesController.updateEjercicio(req, res);
});

router.put('/updateRutina', async function(req, res){
    await myRoutinesController.updateRutina(req, res);
});

//-------------------------------Metodos DELETE---------------------------------------------------
router.delete('/deleteEjercicio', async function(req, res){
    await myRoutinesController.deleteEjercicio(req,res);
});

router.delete('/deleteRutina', async function(req, res){
    await myRoutinesController.deleteRutina(req,res);
});
module.exports = router;