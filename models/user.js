// this file is for creating a User model using mongoose that will be used to create the thought schema.
// this file is also for creating the User controller that will be used to create the CRUD operations for the thought model.
// this file needs to contain fields for username set to string, be unique, required, and trimmed. 
// this file also needs to contain fields for email set to string, be unique, required, and match a valid email address using mongooses matching validation
// this file also needs to contain fields for thoughts set to an array of _id values referencing the Thought model
// this file also needs to contain fields for friends set to an array of _id values referencing the User model (self-reference)
// this file also needs to contain a virtual called friendCount that retrieves the length of the user's friends array field on query.
const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');
// const userSchema = require('../models/user');


const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+@.+\..+/]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// get total count of friends on retrieval
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
}
);

const User = model('User', userSchema);

module.exports = User;
