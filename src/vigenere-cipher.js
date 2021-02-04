class VigenereCipheringMachine {
  constructor(isDirect) {
    this.isDirect = isDirect
  }

  encryptAlhabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  encrypt(message, key) {
    let encryptedMessageArr = message.toUpperCase().split(' ')
    let counter = 0

    for (let i = 0; i < encryptedMessageArr.length; i++) {
      let word = encryptedMessageArr[i].split('')
      let newWord = word.map(el => {

        if (el.charCodeAt(0) < 65 || el.charCodeAt(0) > 90) {
          return el
        }

        let indexM = this.encryptAlhabet.indexOf(el)
        let indexK = this.encryptAlhabet.indexOf(key[counter % (key.length)].toUpperCase())

        counter++

        return this.encryptAlhabet[(indexM + indexK) % 26]
      })

      if (this.isDirect === false) {
        encryptedMessageArr[i] = newWord.reverse().join('')
      } else {
        encryptedMessageArr[i] = newWord.join('')
      }

    }

    if (this.isDirect === false) {
      return encryptedMessageArr.reverse().join(' ')
    }

    return encryptedMessageArr.join(' ')
  }

  decrypt(encryptedMessage, key) {
    let encryptedMessageArr = encryptedMessage.toUpperCase().split(' ')
    let counter = 0

    for (let i = 0; i < encryptedMessageArr.length; i++) {
      let word = encryptedMessageArr[i].split('')
      let newWord = word.map(el => {

        if (el.charCodeAt(0) < 65 || el.charCodeAt(0) > 90) {
          return el
        }

        let indexM = this.encryptAlhabet.indexOf(el)
        let indexK = this.encryptAlhabet.indexOf(key[counter % (key.length)].toUpperCase())

        counter++

        if ((indexM - indexK) % 26 < 0) {
          return this.encryptAlhabet[(((indexM - indexK) % 26) + 26)]
        }

        return this.encryptAlhabet[(indexM - indexK) % 26]
      })

      if (this.isDirect === false) {
        encryptedMessageArr[i] = newWord.reverse().join('')
      } else {
        encryptedMessageArr[i] = newWord.join('')
      }
    }

    if (this.isDirect === false) {
      return encryptedMessageArr.reverse().join(' ')
    }

    return encryptedMessageArr.join(' ')
  }
}

module.exports = VigenereCipheringMachine
