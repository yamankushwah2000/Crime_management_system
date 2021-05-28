const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true, unique: true, trim: true, minlength: 3},
  user_email:{type: String, required:true},
  user_mobile:{type :Number , reqired:true},
  user_password:{type: String, required:true},
  user_Gender:{type: String, required:true},
  user_DoB:{type: Date, required:true},

}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;