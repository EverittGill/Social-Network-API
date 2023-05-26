// this is the connection file that will connect to the database
// this file will need to use mongoose to connect to the database
// this file will need to use mongoose's connection method to connect to the database
// this file will need to use mongoose's connection method to log the mongo queries being executed

const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/social-network-api';
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

module.exports = db;