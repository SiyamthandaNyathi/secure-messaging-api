require('dotenv').config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET,
  aesKey: Buffer.from(process.env.AES_SECRET || 'default-32-byte-securekey-0000'), // 32 bytes for AES-256
};
