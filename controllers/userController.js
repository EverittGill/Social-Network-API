
// this file will contain all the functions that will be used to create the CRUD operations for the User model.
// this file will need to contain the following controller methods: 

// // createUser
// // updateUser by its _id 
// // deleteUser by its _id
// // getAllUsers
// // getUserById and populate thought and friend data by its _id field


const { User, Thought } = require('../models');

// wite post route for /api/users
// create a user

module.exports = {

// get all users
getUsers(req, res) {
  User.find()
  .then((user) => res.json(user))
  .catch((err) => res.status(500).json(err));
},


// getSingleUser
getSingleUser(req, res) {
  console.log(user)
  User.findOne({ id: req.params.user._id })
  .select('-__v')
  .then((user) =>
  !user
    ? res.status(404).json({ message: 'no user with that ID found' })
    : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
},

createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

}



