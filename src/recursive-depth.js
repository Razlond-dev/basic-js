module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1
    let depth = 0
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        counter = this.calculateDepth(arr[i])
        if (counter > depth) {
          depth = counter
        }
      }
    }
    return ++depth
  }
};