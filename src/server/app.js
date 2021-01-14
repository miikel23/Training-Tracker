var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
//define routes
var usersRouter = require('./routes/users');
var ejercicioRouter = require('./routes/myRoutines');
//end route definition

var app = express();
var cors = require('cors');
app.set(express.static(path.join(__dirname, 'views')));

//middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//use routes
app.use('/', usersRouter);
app.use('/myRoutines',ejercicioRouter);
app.use("/*", (req, res, next) => {
    console.log("serving react index.html")
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = app;
