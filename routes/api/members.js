const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');

// Get All Members
router.get('/', (req, res) => res.json(members));

// Get Single Member
router.get('/:id', (req, res) => {
  const found = members.some((member) => member.id === +req.params.id);
  found
    ? res
        .status(200)
        .json(members.filter((member) => member.id === +req.params.id))
    : res
        .status(400)
        .send(`There is no member with the id of ${req.params.id}`);
});

// Create Member
router.post('/', (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active',
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: 'Please include a name and email' });
  }

  members.push(newMember);
  res.json(members);
});

module.exports = router;
