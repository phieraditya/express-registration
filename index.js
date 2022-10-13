const express = require('express');
const path = require('path');

const members = require('./Members');
const logger = require('./middleware/logger');

const app = express();

// Init middleware
// app.use(logger);

// Get All Members
app.get('/api/members', (req, res) => res.json(members));

// Get Single Member
app.get('/api/members/:id', (req, res) => {
  const found = members.some((member) => member.id === +req.params.id);
  found
    ? res
        .status(200)
        .json(members.filter((member) => member.id === +req.params.id))
    : res
        .status(400)
        .send(`There is no member with the id of ${req.params.id}`);
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
