const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;
    for (let char of message) {
      if (this.alphabet.includes(char)) {
        let charIndex = this.alphabet.indexOf(char);
        let keyCharIndex = this.alphabet.indexOf(key[keyIndex]);
        let encryptedChar = this.alphabet[(charIndex + keyCharIndex) % this.alphabet.length];
        result += encryptedChar;
        keyIndex++;
        if (keyIndex === key.length) keyIndex = 0;
      } else {
        result += char;
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;
    for (let char of encryptedMessage) {
      if (this.alphabet.includes(char)) {
        let charIndex = this.alphabet.indexOf(char);
        let keyCharIndex = this.alphabet.indexOf(key[keyIndex]);
        let decryptedChar = this.alphabet[(charIndex - keyCharIndex + this.alphabet.length) % this.alphabet.length];
        result += decryptedChar;
        keyIndex++;
        if (keyIndex === key.length) keyIndex = 0;
      } else {
        result += char;
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
