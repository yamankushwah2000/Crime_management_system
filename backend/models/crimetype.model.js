


const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const crimetypeSchema = new Schema(
{
  Crime_name:
   { type: String, required: true },

  Crime_count:
   { type: Number, required: true },

  
}, 
{
  timestamps: true,
}

);

const Crimetype = mongoose.model('Crimetype', crimetypeSchema);

module.exports = Crimetype;