const mongoose = require('mongoose');
var uri = 'mongodb+srv://dbUser0:T3tTG3FVf8MEXynN@cluster0.2rz9w.mongodb.net/db_trainingtracker?retryWrites=true&w=majority';
localuri = 'mongodb://localhost:27017/db_trainingtracker';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
    .then(data => console.log('Mongo Database connection established succesfully'))
    .then(err => console.error(err));