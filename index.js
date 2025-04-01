const fizzbuzz = (number) => {
    if (number % 3 == 0) {
      return "Fizz"
    }
    if (number === 5) {
      return "Buzz"
    }
    if(number % 3 === 0 && number % 15 === 0){
        return 'Fizzbuzz'
    }
    return number
  }
  
  module.exports = { fizzbuzz }