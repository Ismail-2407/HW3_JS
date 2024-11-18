//1 Написать функцию возведения числа в степень
function pow(base, exponent) {
  return Math.pow(base, exponent);
}
console.log(pow(2, 3));

//2 Написать функцию поиска наибольшего общего делителя
function nod(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
console.log(nod(48, 18));

//3 Написать функцию для поиска максимальной цифры в числе
function maxDigit(num) {
  let max = 0;
  const digits = num.toString().split("");

  for (let digit of digits) {
    if (parseInt(digit) > max) {
      max = parseInt(digit);
    }
  }
  return max;
}
console.log(maxDigit(263589));

//4 Написать функцию, которая определяет простое ли переданное число.
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7));
console.log(isPrime(10));

//5Написать функцию для вывода всех множителей переданного числа в возрастающем порядке.Например: число 18 – множители 2 * 3 * 3
function getFactors(num) {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}
console.log(getFactors(18));
