const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" || isNaN(sampleActivity) || sampleActivity <= 0) {
    // return false for invalid input
    return false;
  }
  // convert the string to a number
  let activity = Number(sampleActivity);
  // check if the activity is in the range of possible values
  if (activity > MODERN_ACTIVITY || activity <= 0) {
    // return false for out of range input
    return false;
  }
  // calculate the age using the formula
  let age = Math.log(MODERN_ACTIVITY / activity) / (0.693 / HALF_LIFE_PERIOD);
  // round up the age and return it
  return Math.ceil(age);
}


module.exports = {
  dateSample
};
