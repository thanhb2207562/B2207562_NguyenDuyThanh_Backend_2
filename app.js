const express = require('express');
const cors = require('cors');

const app = express();
const contactRoutes = require('./routes/contact.route');
app.use(cors());
app.use(express.json());

app.use('/api/contacts', contactRoutes);
app.get('/', (req, res) => {
  res.send('WELCOME TO CONTACT BOOK APPLICATION');
});

module.exports = app;