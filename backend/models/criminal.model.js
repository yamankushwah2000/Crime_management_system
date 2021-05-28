// Criminal_id(auto generated)


const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const criminalSchema = new Schema({

  criminal_name:{type: String, required: true, unique: true, minlength: 3},
  criminal_gender:{type: String, required: true},
  criminal_DoB: {type: Date, required: true},
  criminal_address: {type: String, required: true},
  criminal_crime_count: {type: Number, required: true},

}, {
  timestamps: true,
});

const Criminal = mongoose.model('Criminal', criminalSchema);

module.exports = Criminal;