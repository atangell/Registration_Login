let mongoose = require('mongoose');

// create a model class
let userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  country : String,
  gender : String,
  password: String,
  feedback: String,
  language: String
},
{
  collection: "userData"
});

module.exports = mongoose.model('userData', userSchema);