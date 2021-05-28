const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const officerSchema = new Schema({

Station_id:{
	type:String,
	required:true,

},

Officer_id:{
	type:String,
	required:true,
},
Officer_mobile:{type :Number , reqired:true},
  Officer_fname: {
    type: String,
    required: true,
    unique: true,
    minlength: 3
  },
  Officer_lname: {
    type: String,
    required: true,
    unique: true,
    minlength: 3
  },

  


Officer_Gender: {
    type: String,
    required: true,
    
   
  },


Officer_DoB: {
    type: Date,
    required: true,
    
  },

  Officer_rank:{
type:Number,
required:true,

  },

 Officer_username:{
 	type:String,
 	required:true,
 },

 Officer_password:{
 	type:String,
 	required:true,
 },

}, 


{
  timestamps: true,
}


);


const Officer = mongoose.model('Officer', officerSchema);

module.exports = Officer;