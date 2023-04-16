const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    // return false for invalid input
    return false;
  }
  // initialize an empty array to store the first letters
  let letters = [];
  // loop through the members array
  for (let i = 0; i < members.length; i++) {
    // check if the current element is a string
    if (typeof members[i] === "string") {
      // remove any whitespaces from the string
      let name = members[i].trim();
      // get the first letter of the name in upper case
      let letter = name[0].toUpperCase();
      // push the letter to the letters array
      letters.push(letter);
    }
  }
  // sort the letters array alphabetically
  letters.sort();
  // join the letters array into a string and return it
  return letters.join("");
}

module.exports = {
  createDreamTeam
};
