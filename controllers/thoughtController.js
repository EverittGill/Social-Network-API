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


    // createThought


    // update thought by id


    // delete thought by id
}