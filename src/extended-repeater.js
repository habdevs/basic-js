const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(string, options) {
  let stringToRepeat = String(string);
  let repeatedStrings = [];
  let additions = [];

  if (options.addition !== undefined) {
    let additionRepeatTimes = options.additionRepeatTimes || 1;
    for (let i = 0; i < additionRepeatTimes; i++) {
      additions.push(String(options.addition));
    }
  }

  const additionString = additions.join(options.additionSeparator || '|');
  let stringRepeatTimes = options.repeatTimes || 1;
  for (let i = 0; i < stringRepeatTimes; i++) {
    repeatedStrings.push(stringToRepeat + additionString);
  }

  return repeatedStrings.join(options.separator || '+');
}

module.exports = {
  repeater
};
