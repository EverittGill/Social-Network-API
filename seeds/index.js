const mongoose = require('mongoose');
const Thought = require('../models/thought');
const User = require('../models/user');

// Replace with your MongoDB connection string
const connectionString = 'mongodb://127.0.0.1:27017/social-network-api';

// Connect to MongoDB
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: false,
  useFindAndModify: false
});
r
const seedData = async () => {
  try {
    await Thought.deleteMany();
    await User.deleteMany();

    // Create thoughts
    const thoughts = await Thought.insertMany(thoughtsData);

    // Create users
    const users = await User.insertMany(usersData);

    // Assign thoughts to users
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      user.thoughts = [thoughts[i]._id];
      await user.save();
    }

    console.log('Seed data created successfully');
  } catch (error) {
    console.error('Error creating seed data:', error);
  } finally {
    mongoose.connection.close();
  }
};

if (process.argv[2] === 'seed') {
  const thoughtsData = []; 
  const usersData = []; 


  seedData();
}
