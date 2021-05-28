const router = require('express').Router();
let Complaint = require('../models/complaint.model');

router.route('/').get((req, res) => {
  Complaint.find()
    .then(complaints => res.json(complaints))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const complaint_crime_type = req.body.complaint_crime_type;
  const user_mobile= Number(req.body.user_mobile);
  const complaint_location= req.body.complaint_location;
  const complaint_description= req.body.complaint_description;
  const complaint_date = req.body.complaint_date;
  const complaint_status= req.body.complaint_status;
  const newComplaint = new Complaint({username, complaint_crime_type, user_mobile, complaint_location, complaint_description, complaint_date,complaint_status});

  newComplaint.save()
    .then(() => res.json('Complaint added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Complaint.findById(req.params.id)
    .then(complaints => res.json(complaints))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Complaint.findByIdAndDelete(req.params.id)
    .then(() => res.json('Complaint deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/findPending').post((req,res)=>{
  Complaint.find({complaint_status:'Pending'})
.then((complaints) => res.json(complaints))
.catch(err => res.status(400).json('Error: ' + err));
});



router.route('/findResolved').post((req,res)=>{
    Complaint.find({complaint_status:'Resolved'})
  .then((complaints) => res.json(complaints))
  .catch(err => res.status(400).json('Error: ' + err));
  });
router.route('/search').post((req,res)=>{
  //const bd = req.body.bd;
  //const ed = req.body.ed;
  Complaint.find({complaint_date:{"$gte": new Date("1999")}})
.then((complaints) => res.json(complaints))
});
router.route('/update/:id').post((req, res) => {
  Complaint.findById(req.params.id)
    .then(complaints  => {

  complaints.complaint_status= "Resolved";

  
      complaints.save()
        .then(() => res.json('Complaint updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/find').post((req,res)=>{
    const name = req.body.complaint_crime_type;
    
    Crimetype.find({Crime_name:name})
  .then((crime) => {
    crime.Crime_count=crime.Crime_count+1;
    crime.save()
    .then(() => res.json('Crimecount updated!'))
    .catch(err => res.status(400).json('cant update count: ' + err));
  })
  .catch(err => res.status(400).json('Error: ' + err));
  });

  
module.exports = router;