const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const user_email = req.body.user_email;
  const user_mobile= Number(req.body.user_mobile);
  const user_password= req.body.user_password;
  const user_Gender= req.body.user_Gender;
  const user_DoB = req.body.user_DoB;
  const newUser = new User({username, user_email, user_mobile, user_password, user_Gender, user_DoB});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req,res)=>{
  const name = req.body.username;
  User.find({username:name})
.then((users) => res.json(users))
});
router.route('/search').post((req,res)=>{
  //const bd = req.body.bd;
  //const ed = req.body.ed;
  User.find({user_DoB:{"$gte": new Date("1999")}})
.then((users) => res.json(users))
});
router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(users  => {
  users.username = req.body.username;
  users.user_email = req.body.user_email;
  users.user_mobile= Number(req.body.user_mobile);
  users.user_password= req.body.user_password;
  users.user_Gender= req.body.user_Gender;
  users.user_DoB = Date.parse(req.body.user_DoB);
  
      users.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;