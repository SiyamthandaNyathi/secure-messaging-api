const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');

router.post('/auth/token', (req, res) => {
  const { userId } = req.body;
  if (!userId) return res.status(400).json({ error: 'Missing userId' });

  const token = jwt.sign({ userId }, jwtSecret, { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
