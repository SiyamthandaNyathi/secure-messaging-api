const express = require('express');
const bodyParser = require('body-parser');
const messageRoutes = require('./controllers/message');
const authRoutes = require('./controllers/auth');

const app = express();
app.use(bodyParser.json());
app.use('/', authRoutes);
app.use('/', messageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
