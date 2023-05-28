
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

createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

}



