const router = require('express').Router();
let Crimetype = require('../models/crimetype.model');

router.route('/').get((req, res) => {
  Crimetype.find()
    .then(Crimetype => res.json(Crimetype))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const Crime_name=req.body.Crime_name;
  const Crime_count=Number(req.body.Crime_count);

  
  const newCrimetype = new Crimetype({Crime_name,Crime_count});

  newCrimetype.save()
    .then(() => res.json('Crimetype added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Crimetype.findById(req.params.id)
    .then(Crimetype => res.json(Crimetype))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Crimetype.findByIdAndDelete(req.params.id)
    .then(() => res.json('Crimetype deleted.'))
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

router.route('/update/:id').post((req, res) => {
  Crimetype.findById(req.params.id)
    .then(Crimetype => {
      Crimetype.Crime_name=req.body.Crime_name;
      Crimetype.Crime_count=req.body.Crime_count;

      Crimetype.save()
        .then(() => res.json('Crimetype updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;