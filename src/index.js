module.exports = function toReadable (number) {
  const db = {
    digits: {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
    },
    teenths: {
      1: 'eleven',
      2: 'twelve',
      3: 'thirteen',
      4: 'fourteen',
      5: 'fifteen',
      6: 'sixteen',
      7: 'seventeen',
      8: 'eighteen',
      9: 'nineteen',
    },
    tens: {
      1: 'ten',
      2: 'twenty',
      3: 'thirty',
      4: 'forty',
      5: 'fifty',
      6: 'sixty',
      7: 'seventy',
      8: 'eighty',
      9: 'ninety',
    },
  }

  const divider = " "

  const resolveTwoDigits = (number) => {
    secondDigit = Math.floor((number / 10) % 10)
    firstDigit = Math.floor((number / 1) % 10)
    const calculatedNumber = secondDigit * 10 + firstDigit
    if (calculatedNumber === 0) {
      return ''
    }
    if (calculatedNumber % 10 === 0) {
      return db.tens[secondDigit]
    } 
    if (calculatedNumber < 10) {
      return db.digits[firstDigit]
    }
    if (calculatedNumber > 10 && calculatedNumber < 20) {
      return db.teenths[firstDigit]
    }
    return db.tens[secondDigit] + divider + db.digits[firstDigit]
  }

  const resolveThreeDigits = (number) => {
    thirdDigit = Math.floor((number / 100) % 10)
    if (number % 100 === 0) {
      return db.digits[thirdDigit] + divider + 'hundred'
    } else {
      return db.digits[thirdDigit] + divider + 'hundred' + divider + resolveTwoDigits(number)
    }
  }

  if (number < 10) {
    return db.digits[number]
  } 

  if (number >= 10 && number < 100) {
    return resolveTwoDigits(number)
  }

  if (number >= 100 && number < 1000) {
    return resolveThreeDigits(number)
  }
}
