const router = require('express').Router();
let Criminal = require('../models/criminal.model');

router.route('/').get((req, res) => {
  Criminal.find()
    .then(criminals => res.json(criminals))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

  const criminal_name = req.body.criminal_name;
  const criminal_address= req.body.criminal_address;
  const criminal_gender= req.body.criminal_gender;
  const criminal_DoB = req.body.criminal_DoB;
  const criminal_crime_count = req.body.criminal_crime_count;
  const newCriminal = new Criminal({criminal_name,criminal_address,criminal_gender,criminal_DoB,criminal_crime_count});

  newCriminal.save()
    .then(() => res.json('Criminal added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Criminal.findById(req.params.id)
    .then(criminals => res.json(criminals))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Criminal.findByIdAndDelete(req.params.id)
    .then(() => res.json('Criminal record deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
/*router.route('/search').get((req, res) => {
    //const name = req.body.Criminal_name;
    Criminal.find({"username":"yaman"})
        .then(criminals => res.json(criminals))
        .catch(err => res.status(400).json('Error: ' + err));
        console.log(criminals);
        
  });
  router.route("/find").get(function(req, res) {});
  router.route("/find").get(function(req, res) {
    criminals.find({"username":"yaman"}), function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  });  */
router.route('/update/:id').post((req, res) => {
  Criminal.findById(req.params.id)
    .then(criminals => {
        criminals.Criminal_id = req.body.Criminal_id;
        criminals.Criminal_name = req.body.Criminal_name;
        criminals.criminal_mobile= Number(req.body.Criminal_mobile);
        criminals.Criminal_addr= req.body.Criminal_addr;
        criminals.Criminal_Gender= req.body.Criminal_Gender;
        criminals.Criminal_DoB = req.body.Criminal_DoB;
        criminals.Criminal_crime_count = req.body.Criminal_crime_count;

      criminals.save()
        .then(() => res.json('Criminal updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;