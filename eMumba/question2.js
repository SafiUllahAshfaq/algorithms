function primeNumbersTill(number) {
  var primeNumbers = [];
  for (let i = number; i > 1; i--) {
    if (isPrime(i)) primeNumbers.push(i);
  }
  return primeNumbers;
}

function isPrime(number) {
  var prime = true;
  for (let i = number - 1; i > 1; i--) {
    if (number % i === 0) prime = false;
  }
  return prime;
}

const primeNumbers = primeNumbersTill(7);
var numbers = [];
for (let i = 0; i <= primeNumbers.length; i++) {
  var tempArr = primeNumbers.slice(i, primeNumbers.length);
  tempArr.forEach(value => {
    numbers.push(value);
  });
}
console.log(numbers.join(','));
