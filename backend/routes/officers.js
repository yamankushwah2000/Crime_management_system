
const router = require('express').Router();
let Officer = require('../models/officer.model');

router.route('/').get((req, res) => {
  Officer.find()
    .then(Officer => res.json(Officer))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const Station_id = req.body.Station_id;
  const Officer_id = req.body.Officer_id;
  const Officer_fname=req.body.Officer_fname;
  const Officer_lname=req.body.Officer_lname;
  const Officer_mobile = Number(req.body.Officer_mobile);
  const Officer_Gender=req.body.Officer_Gender;
  const Officer_Dob=req.body.Officer_Dob;
  const Officer_rank=req.body.Officer_rank;
  const Officer_username=req.body.Officer_username;
  const Officer_password=req.body.Officer_password;

  
  const newOfficer = new Officer({Station_id,Officer_id,Officer_fname,Officer_lname,Officer_mobile,Officer_Gender,Officer_Dob,Officer_rank,Officer_username,Officer_password});

  newOfficer.save()
    .then(() => res.json('Officer added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Officer.findById(req.params.id)
    .then(Officer => res.json(Officer))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Officer.findByIdAndDelete(req.params.id)
    .then(() => res.json('Officer deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req, res) => {
  Officer.findById(req.params.id)
    .then(Officer => {
   Officer.Station_id = req.body.Station_id;
   Officer.Officer_id = req.body.Officer_id;
   Officer.Officer_fname=req.body.Officer_fname;
   Officer.Officer_lname=req.body.Officer_lname;
   Officer.Officer_mobile = Number(req.body.Officer_mobile);
   Officer.Officer_Gender=req.body.Officer_Gender;
   Officer.Officer_Dob=req.body.Officer_Dob;
   Officer.Officer_rank=req.body.Officer_rank;
   Officer.Officer_username=req.body.Officer_username;
   Officer.Officer_password=req.body.Officer_password;

      Officer.save()
        .then(() => res.json('Officer updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;