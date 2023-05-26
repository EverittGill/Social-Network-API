// Purpose: Seed the database with some dummy data

const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', async () => {
    console.log('connected to the database');
    await Thought.deleteMany({});
    await User.deleteMany({});
    console.log('collections deleted');

    const thoughts = [];

    for (let i = 0; i < 100; i++) {

    }});