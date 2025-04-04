const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { encryptMessage, decryptMessage } = require('../utils/encryption');
const { authenticateToken } = require('../middleware/auth');

const storagePath = path.join(__dirname, '../data/storage.json');

function readStorage() {
  if (!fs.existsSync(storagePath)) return {};
  return JSON.parse(fs.readFileSync(storagePath));
}

function writeStorage(data) {
  fs.writeFileSync(storagePath, JSON.stringify(data, null, 2));
}

router.post('/messages', authenticateToken, (req, res) => {
  const { message } = req.body;
  const userId = req.user.userId;

  if (!message) return res.status(400).json({ error: 'Missing message' });

  const encrypted = encryptMessage(message);
  const timestamp = Date.now();

  const data = readStorage();
  if (!data[userId]) data[userId] = [];
  data[userId].push({ encrypted, timestamp });
  writeStorage(data);

  res.json({ success: true, encrypted });
});

router.get('/messages/:userId', authenticateToken, (req, res) => {
  const { userId } = req.params;

  if (req.user.userId !== userId) {
    return res.status(403).json({ error: 'Access denied' });
  }

  const data = readStorage();
  const messages = data[userId] || [];

  const now = Date.now();
  const TEN_MINUTES = 10 * 60 * 1000;

  const validMessages = messages.filter(m => now - m.timestamp < TEN_MINUTES);
  data[userId] = validMessages;
  writeStorage(data);

  const decrypted = validMessages.map(entry => {
    try {
      return decryptMessage(entry.encrypted);
    } catch {
      return '[Decryption Error]';
    }
  });

  res.json({ messages: decrypted });
});

module.exports = router;
