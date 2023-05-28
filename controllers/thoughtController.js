// this file will contain all the functions that will be used to create the CRUD operations for the thought model.
// this file will need to contain the following controller methods: 
// // getAllThoughts
// // getThoughtById
// // createThought POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
// // updateThought 
// // deleteThought

// this file will also contain the following controller methods for the reaction model:
// post to create a reaction stored in a single thought's reactions array field
// delete to pull and remove a reaction by the reaction's reactionId value
// those will be stored under /api/thoughts/:thoughtId/reactions

const { Thought, User } = require('../models');
const {Types} = require("mongoose");

module.exports = {
    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // get one thought by id


    // createThought that is attached to a user
    createThought(req, res) {
        console.log(req.body.id)
        Thought.create(req.body)
        .then((dbThoughtData) => {
            return User.findOneAndUpdate(
                { _id: req.body.id, username: req.body.username },
                { $addToSet: { thoughts: dbThoughtData._id } },
                { new: true }
                
            );
        })
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })

    },




    // update thought by id
        

    // delete thought by id
}