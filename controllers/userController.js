
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


// get all users
function getUsers(req, res) {
  User.find()
  .then((user) => res.json(user))
  .catch((err) => res.status(500).json(err));
}

// getSingleUser by their _id and populated thought and friend data
function getSingleUser(req, res) {
  const { objectId } = require('mongoose').Types;
  console.log(req.params.id)
  User.findOne({ _id: objectId(req.params.id) })
  .select('-__v')
  .then((user) =>
  !user
    ? res.status(404).json({ message: 'no user with that ID found' })
    : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
}

function createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  }

// create a function to update a user by their _id
async function updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate({ id: req.params.id}, req.body, { new: true });
      if (!user) {
        res.status(404).json({ message: 'no user found with this id' });
        return;
      }
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

async function deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.id });
      if (!user) {
        res.status(404).json({ message: 'no user found with this id' });
        return;
      }
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

// function to add a friend to a user's friend list
async function addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );
      if (!user) {
        res.status(404).json({ message: 'no user found with this id' });
        return;
      }
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }


// function to remove a friend from a user's friend list
async function deleteFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );
      if (!user) {
        res.status(404).json({ message: 'no user found with this id' });
        return;
      }
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }



module.exports = { getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, deleteFriend}



