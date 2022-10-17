const express = require('express');
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

module.exports = router;
