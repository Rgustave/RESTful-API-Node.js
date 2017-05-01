
var restful = require ('node-restful');
var mongoose = restful.mongoose;


var customerSchema = new mongoose.Schema({
	  email: String,
	  firstname: String,
	  lastname: String,
	  phonenumber: String,
	  address: String
});

module.exports = restful.model('Customers', customerSchema);
