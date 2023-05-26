const express = require('express');
const db = require('./config/connnection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.on('open', () => {
  console.log(`Connected to MongoDB.`);
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
