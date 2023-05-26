const mongoose = require('mongoose');
const Thought = require('../models/Thought');


const thoughtsData = [
  {
    thoughtText: 'First thought',
    username: 'user1',
    reactions: [
      { reactionBody: 'Like', username: 'user2' },
      { reactionBody: 'Love', username: 'user3' }
    ]
  },
    {
    thoughtText: 'Second thought',
    username: 'user2',
    reactions: [
      { reactionBody: 'Like', username: 'user1' }
    ]
   },
    {
        thoughtText: 'Third thought',
        username: 'user3',
        reactions: [
          { reactionBody: 'Like', username: 'user1' },
          { reactionBody: 'Love', username: 'user2' },
          { reactionBody: 'Haha', username: 'user4' }
        ]
      },
      {
        thoughtText: 'Fourth thought',
        username: 'user4',
        reactions: [
          { reactionBody: 'Like', username: 'user3' },
          { reactionBody: 'Love', username: 'user1' }
        ]
      },
      {
        thoughtText: 'Fifth thought',
        username: 'user5',
        reactions: [
          { reactionBody: 'Like', username: 'user2' },
          { reactionBody: 'Haha', username: 'user4' }
        ]
      }
    ];
// Function to seed the data
async function seedData() {
  try {
    await Thought.deleteMany();

    await Thought.insertMany(thoughtsData);

    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
}

// Call the function to seed the data
seedData();
