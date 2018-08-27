var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

/*
var logger = function(req, res, next) {
  console.log('logging. . .');
  next();
}

app.use(logger);
*/

//bodyparser middlewre
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set Static path
app.use(express.static(path.join(__dirname, 'public')));

var person = {
  name: 'Bert',
  age: 49
}

app.get('/', function(req, res){
  res.json(person);
});

app.listen(3000, function(){
  console.log('Server Started on port 3000');
})
