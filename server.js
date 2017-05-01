var express = require('express');
var mongoose = require('mongoose');
var bodyParser =  require('body-parser');

mongoose.connect(process.env.MONGODB_URI);

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use('/api',require('./routes/api'))

var server  = app.listen(process.env.PORT || 3000);
console.log('API is running on port',server.address().port);