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
  encrypt(msg, key) {
      if(typeof msg !== 'string' || typeof key !== 'string')
          throw new Error('Incorrect arguments!');
      key = key.toUpperCase();
      if(msg.length > key.length)
          key = key.repeat(Math.ceil(msg.length / key.length));
      let result = '';
      msg = msg.toUpperCase();
      let curKey = 0;
      for(let i = 0; i < msg.length; i++) {
          if(!(msg[i].charCodeAt(0) >= 'A'.charCodeAt(0) && msg[i].charCodeAt(0) <= 'Z'.charCodeAt(0))) {
          result = result + msg[i];
          } else {
              let code = (msg.charCodeAt(i) - 'A'.charCodeAt(0)) + key.charCodeAt(curKey);
              code = code > 'Z'.charCodeAt(0) ? code - 'Z'.charCodeAt(0) + 'A'.charCodeAt(0) - 1 : code;
              result = result + String.fromCharCode(code);
              curKey++;
          }
      }
      if(this.direct)
          return result;
      else
          return result.split('').reverse().join('');
  }

  decrypt(msg, key) {
      if(typeof msg !== 'string' || typeof key !== 'string')
          throw new Error('Incorrect arguments!');
      key = key.toUpperCase();
      if(msg.length > key.length)
          key = key.repeat(Math.ceil(msg.length / key.length));
      let result = '';
      msg = msg.toUpperCase();
      let curKey = 0;
      for(let i = 0; i < msg.length; i++) {
          if(!(msg[i].charCodeAt(0) >= 'A'.charCodeAt(0) && msg[i].charCodeAt(0) <= 'Z'.charCodeAt(0))) {
              result = result + msg[i];
          } else {
              let code = msg.charCodeAt(i) - (key.charCodeAt(curKey) - 'A'.charCodeAt(0));
              code = code < 'A'.charCodeAt(0) ? 'Z'.charCodeAt(0) - ('A'.charCodeAt(0) - code) + 1 : code;
              result = result + String.fromCharCode(code);
              curKey++;
          }
      }
      if(this.direct)
          return result;
      else
          return result.split('').reverse().join('');
  }

  constructor(direct) {
    if(direct == undefined || direct == true)
      this.direct = true;
    else
      this.direct = false;
  }
}

module.exports = {
  VigenereCipheringMachine
};
