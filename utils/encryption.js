const crypto = require('crypto');
const { aesKey } = require('../config/config');
const ALGORITHM = 'aes-256-cbc';

function encryptMessage(message) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(ALGORITHM, aesKey, iv);
  let encrypted = cipher.update(message, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  const ivBase64 = iv.toString('base64');
  return `${ivBase64}:${encrypted}`;
}

function decryptMessage(payload) {
  const [ivBase64, encrypted] = payload.split(':');
  const iv = Buffer.from(ivBase64, 'base64');
  const decipher = crypto.createDecipheriv(ALGORITHM, aesKey, iv);
  let decrypted = decipher.update(encrypted, 'base64', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

module.exports = { encryptMessage, decryptMessage };
