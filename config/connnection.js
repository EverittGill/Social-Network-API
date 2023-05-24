// this is the connection file that will connect to the database
// this file will need to use mongoose to connect to the database
// this file will need to use mongoose's connection method to connect to the database
// this file will need to use mongoose's connection method to log the mongo queries being executed

const { connect, connection } = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/social-network-api';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;