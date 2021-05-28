const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const complaintSchema = new Schema({
  username:{ type: String, required: true },
  user_mobile:{type :Number , reqired:true},
  complaint_crime_type:{type: String,required: true},
  complaint_location:{type: String,required: true},
  complaint_description :{type: String, required:true},
  complaint_status:{type: String, required: true },
  complaint_date:{ type: Date, required: true },
}, 
{
  timestamps: true,
});

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;