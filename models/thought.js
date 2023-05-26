// this file will be used to create a model for thoughts using mongoose.
// this file will also be used to create the thought controller that will be used to create the CRUD operations for the thought model.
// this file needs to contain fields for thoughtText set to string, be required, and have a minimum length of 1 and a maximum length of 280 characters.
// this file also needs to contain fields for createdAt set to date, default to the current timestamp, and use a getter method to format the timestamp on query.
// this file also needs to contain fields for username which will be the user who created this thought, and be required and reference the User model's _id, and be a string.
// this file also needs to contain fields for reactions which will be an array of nested documents created with the reactionSchema.
// this file also needs to contain a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // get: (createdAtVal) => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

// get total count of reactions on retrieval
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
}
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;