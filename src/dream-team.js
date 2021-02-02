const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let secretWord = []
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == "string") {
        let char = members[i].trim().charAt().toUpperCase()
        secretWord.push(char)
      }
    }
  } else return false
  return secretWord.sort().join('')
};