module.exports = function countCats(matrix) {
  let catCounter = 0
    for (let i = 0; i < matrix.length; i++) {
      matrix[i].forEach(el => {
        if (el == '^^') {
          catCounter++
        }
      });
    }
  return catCounter
};
