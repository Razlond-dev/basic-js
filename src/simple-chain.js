const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (typeof value == 'function') {
      value = value.toString()
    }
    if (this.chain.length > 0) {
      this.chain.push(`~~( ${value} )`)
      return chainMaker
    } else {
      this.chain.push(`( ${value} )`)
      return chainMaker
    }
  },
  removeLink(position) {
    if (position > 0 && position < this.chain.length) {
      this.chain.splice(position - 1, 1)
      if (position == 1) {
        this.handleTilda()
      }

      return chainMaker
    } else {
      this.chain = []
      throw Error
    }
  },
  reverseChain() {
    this.chain = this.chain.reverse()
    this.handleTilda()
    this.handleTildaInTheEnd()
    return chainMaker
  },
  finishChain() {
    let stringToReturn = this.chain.join('')
    this.chain = []
    return stringToReturn
  },
  handleTilda() {
    if (this.chain.length > 1) {
      if (this.chain[0].slice(0, 2) == '~~') {
        this.chain[0] = this.chain[0].replace('~~(', '(')
      }

      if (this.chain[1].slice(0, 2) !== '~~') {
        this.chain[1] = this.chain[1].replace('(', '~~(')
      }
    }
  },
  handleTildaInTheEnd() {
    if (this.chain.length > 1) {
      if (this.chain[this.chain.length - 1].slice(0, 2) !== '~~') {
        this.chain[this.chain.length - 1] = this.chain[this.chain.length - 1].replace('(', '~~(')
      }
    }
  }
};

module.exports = chainMaker;
