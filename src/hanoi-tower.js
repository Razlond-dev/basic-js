module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {
    turns: 2 ** disksNumber - 1,
    seconds: 0
  }
  obj.seconds = Math.floor(obj.turns * 3600 / turnsSpeed)
  return obj
};
