var express =  require('express');
var router =express.Router();


 var customer = require('../models/customer')
 customer.methods(['get', 'put', 'post', 'delete']);
 customer.register(router, '/customers');


module.exports = router;