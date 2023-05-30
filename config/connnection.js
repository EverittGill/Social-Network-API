// this is the connection file that will connect to the database
// this file will need to use mongoose to connect to the database
// this file will need to use mongoose's connection method to connect to the database
// this file will need to use mongoose's connection method to log the mongo queries being executed

const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-network-api1';
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

module.exports = db;