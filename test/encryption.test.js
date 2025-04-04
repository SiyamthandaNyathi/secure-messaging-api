const { encryptMessage, decryptMessage } = require('../utils/encryption');
const { expect } = require('chai');

describe('Encryption/Decryption', () => {
  it('should encrypt and decrypt correctly', () => {
    const msg = 'Hello Secure World!';
    const encrypted = encryptMessage(msg);
    const decrypted = decryptMessage(encrypted);
    expect(decrypted).to.equal(msg);
  });

  it('should fail with corrupted data', () => {
    const broken = 'broken:payload';
    expect(() => decryptMessage(broken)).to.throw();
  });
});
