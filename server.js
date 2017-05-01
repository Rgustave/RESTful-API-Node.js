var express = require('express');
var mongoose = require('mongoose');
var bodyParser =  require('body-parser');


var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
process.env.MONGOLAB_PURPLE_URI||
'mongodb://localhost/customerdb';


var theport = process.env.PORT || 5000;


mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use('/api',require('./routes/api'))

var server  = app.listen(theport);
console.log('API is running on port',server.address().port);