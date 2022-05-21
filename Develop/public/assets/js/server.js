// Note-Taker homework
const { response } = require('express');
const express = require('express');
const fs = require('fs');  


  // Begin the sequence to start the application and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Start the parsing process setup and folder position. 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// We need to create a list of routes for each one of these methods GET, POST, DELETE.

// Get Route Method
app.get('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf-8', (err, data) => {
    if (err) throw err;
    const parsedData = JSON.parse(data);
    response.json(parsedData);
  } )
});

// Post Route Method


// Delete Route

app.listen(PORT, () => console.log('Listening on PORT: ${PORT}'));