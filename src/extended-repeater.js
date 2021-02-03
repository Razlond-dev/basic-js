module.exports = function repeater(str, { repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|' }) {
  let arr = []
  let string
  let add = ''
  for (let i = 0; i < repeatTimes; i++) {
    string = String(str)
    if (addition || typeof addition == 'boolean' || addition === null) {
      for (let j = 0; j < additionRepeatTimes; j++) {
        if (additionRepeatTimes > 1 && j < additionRepeatTimes - 1) {
          add = add + String(addition) + String(additionSeparator)
        } else {
          add = add + String(addition)
        }
      }
    }
    if (i + 1 == repeatTimes) {
      string = string + add
      arr.push(string)
      string = String(str)
      add = ''
    } else {
      string = string + add + separator
      arr.push(string)
      string = String(str)
      add = ''
    }
  }
  return arr.join('')
}