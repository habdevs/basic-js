const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const uniqueNames = new Set();

  names.forEach(name => {
    let currentName = name;
    uniqueNames.add(uniqueNames.has(currentName) ? generateNewName(currentName) : currentName);

  })

  function generateNewName(currentName, value = 1) {
    const newName = `${currentName}(${value})`;

    if (uniqueNames.has(newName)) {
      return generateNewName(currentName, value + 1);
    } else {
      return newName;
    }
  }

  return Array.from(uniqueNames);
}

module.exports = {
  renameFiles
};
