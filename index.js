const express = require('express');
const path = require('path');

const app = express();

const members = [
  {
    id: 1,
    name: 'Abdul Saleh',
    email: 'abdsaleh@gmail.com',
    status: 'active',
  },
  {
    id: 2,
    name: 'Bimasakti Candra',
    email: 'bimasakti@gmail.com',
    status: 'inactive',
  },
  {
    id: 3,
    name: 'Maharaja Soewanto',
    email: 'maharaja@gmail.com',
    status: 'inactive',
  },
  {
    id: 4,
    name: 'Indira M. Ayughani',
    email: 'ayughani@gmail.com',
    status: 'active',
  },
];

// Get All Members
app.get('/api/members', (req, res) => res.json(members));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
