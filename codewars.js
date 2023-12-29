function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

function positiveSum2(array) {
  return array.reduce((tot, currentVal) => {
    if (currentVal > 0) {
      return tot + currentVal;
    } else {
      return tot;
    }
  }, 0);
}

function positiveSum3(array) {
  return array.reduce((tot, cVal) => (cVal > 0 ? tot + cVal : tot), 0);
}

function noSpace(x) {
  const onlyLetters = [];
  for (let letter of Array.from(x)) {
    if (letter === " ") {
      continue;
    }
    onlyLetters.push(letter);
  }
  return onlyLetters.join("");
}

function noSpace2(x) {
  return x.split(" ").join("");
}

function countPositivesSumNegatives(array) {
  if (array && array.length > 0) {
    const pos = array.reduce((tot, cVal) => (cVal > 0 ? tot + 1 : tot), 0);
    const neg = array.reduce((tot, cVal) => (cVal < 0 ? tot + cVal : tot), 0);
    return [pos, neg];
  }
  return [];
}

function removeExclamationMarks(string) {
  return Array.from(string)
    .filter((char) => char !== "!")
    .join("");
}

// console.log(removeExclamationMarks("!!!!h!el!lsn!"));

// Manual method
// function removeExclamationMarks(string) {
//   const chars = string.split("");
//   const arrayCopy = chars.map((x) => x);
//   arrayCopy.forEach((char) => {
//     if (char === "!") {
//       chars.splice(chars.indexOf(char), 1);
//     }
//   });
//   return chars;
// }

// clever solution
// function removeExclamationMarks(s) {
//   return s.split('!').join('');
// }

// console.log(removeExclamationMarks("!!!!h!el!lsn!"));

function reverseString(string) {
  const array = [];
  string.split("").forEach((char) => array.unshift(char));
  return array.join("");
}

// clever
// const reverseString = (str) => str.split("").reverse().join("");

// console.log(reverseString("world"));

// ! my solution
// function sumTwoSmallestNumbers(numbers) {
//   numbers.sort((a, b) => a - b);
//   return numbers[0] + numbers[1];
// }

// ! better than sort method [ sorting has bigO of nlog(N), as this is a normal loop it is more efficient ]
function sumTwoSmallestNumbers(numbers) {
  let min = Number.MAX_SAFE_INTEGER;
  let secondMin = Number.MAX_SAFE_INTEGER;

  let n;
  for (i = 0; i < numbers.length; i++) {
    n = numbers[i];
    if (n < min) {
      secondMin = min;
      min = n;
    } else if (n < secondMin) {
      secondMin = n;
    }

    console.log({ n });
    console.log({ min });
    console.log({ secondMin });
  }
  return min + secondMin;
}
// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

function litres(time) {
  // drinks 0.5 litres per hour, return smallest value (floor)
  return Math.floor(time * 0.5);
}

// console.log(litres(3));
// console.log(litres(6.7));
// console.log(litres(11.8));

// var isSquare = function (n) {
//   return Number.isInteger(Math.sqrt(n)) ? true : false;
// };

// without using methods
function isSquare(n) {
  for (let i = 0; i <= n; i++) {
    if (n === 0) {
      return true;
    } else if (n / i === i) {
      return true;
    }
  }
  return false;
}

// better variation than above
function isSquare2(n) {
  for (let i = 0; i * i <= n; i++) {
    if (i * i === n) {
      return true;
    }
  }
  return false;
}

// function getMiddle(s) {
//   if (s.length % 2 === 0) {
//     const index = s.length / 2 - 1;
//     console.log(s.slice(index, index + 2));
//   } else {
//     const index = Math.ceil(s.length / 2);
//     console.log({ index });
//     console.log(s[index - 1]);
//   }
// }

function getMiddle(s) {
  const index = s.length / 2 - 1;
  return s.length % 2 === 0 ? s.slice(index, index + 2) : s[Math.ceil(index)];
}

// console.log(getMiddle("testing"));
// console.log(getMiddle("middle"));

// function makeUpperCase(str) {
//   return (str.split("").map((char) => char.toUpperCase())).join("");
// }

function makeUpperCase(str) {
  return str.toUpperCase();
}

console.log(makeUpperCase("hello"));

//
// * Sum all numbers till the given one

// 1. using a For loop
function sumToFor(x) {
  let sum = 0;
  for (i = x; i > 0; i--) {
    sum += i;
  }
  return sum;
}

// 2. using a recursion
function sumToRec(x) {
  if (x < 1) return;
  if (x === 1) return x;
  return x + sumToRec(x - 1);
}

//
// * Calculate Factorial

/* 
The factorial of a natural number is a number multiplied by "number minus one", then by ... 
... "number minus two", and so on till 1. The factorial of n is denoted as n!
We can write a definition of factorial like this:

n! = n * (n - 1) * (n - 2) * ...*1

Values of factorials for different n:

1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
*/

// 1. iterative method
function factorialIterative(n) {
  if (n === 1) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 2. recursive method
function factorialRec(n) {
  if (n === 1) return 1;
  return n * factorialRec(n - 1);
}

// * Convert number to reversed array of digits

function digitize(n) {
  if (n <= 0) return [0];
  return [...n.toString()].reverse().map((num) => Number(num));
}

// * Find Maximum and Minimum Values of a List

function min(list) {
  if (list.length === 1) return list[0];
  let currentMin = list[0];
  for (let i = 0; i < list.length; i++) {
    if (list[i] < currentMin) {
      currentMin = list[i];
    }
  }
  return currentMin;
}

function max(list) {
  if (list.length === 1) return list[0];
  let currentMax = list[0];
  for (let i = 0; i < list.length; i++) {
    if (list[i] > currentMax) {
      currentMax = list[i];
    }
  }
  return currentMax;
}

// * Write a function which calculates the average of the numbers in a given list.

function findAverage(array) {
  if (array.length < 1) return 0;
  return (
    array.reduce((total, currentVal) => total + currentVal, 0) / array.length
  );
}

// * Convert string to camel case (6 kyu)

function toCamelCase(str) {
  if (str === "") return "";
  const chunks = str.split(/[-_]+/);
  if (chunks[0][0] === chunks[0][0].toUpperCase())
    return generateCamelCase(chunks);
  return generateCamelCase(chunks, true);
}

function generateCamelCase(array, notCapital) {
  let newStr = "";
  notCapital
    ? (newStr = array[0][0] + array[0].slice(1))
    : (newStr = array[0][0].toUpperCase() + array[0].slice(1));
  array.slice(1).forEach((item) => {
    newStr += item[0].toUpperCase() + item.slice(1);
  });
  return newStr;
}

toCamelCase("Helllo-my-friend_goes_to_school");
toCamelCase("loosing_is-not_my-style");

// * Is a number prime? <6 kyu>

/* 
Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.
*/

function isPrime(num) {
  if (num <= 1) return false;
  for (i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // num is divisible by i, so it's not prime
  }
  return true; // num is not divisible by any numbers from 2 to sqrt(num), so it's prime
}

// * Two Sum <6 kyu> -- incomplete !!

/* 
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
*/

function twoSum(numbers, target) {
  const pairs = [];
  const indices = [];

  for (const num of numbers) {
    pairs.push([num, target - num]);
  }
  // console.log(pairs);

  for (const pair of pairs) {
    const num1 = pair[0];
    const num2 = pair[1];

    if (numbers.includes(num1) && numbers.includes(num2)) {
      // return [numbers.indexOf(num1), numbers.indexOf(num2)];
      indices.push(numbers.indexOf(num1), numbers.indexOf(num2));
      break;
    }
  }
  return indices;
}

// * Narcissistic number

function narcissistic(value) {
  let total = 0;
  for (const digit of value.toString().split("")) {
    total += digit ** value.toString().length;
  }
  return total === value;
}

narcissistic(153);

// * Number of trailing zeros of N!

/* 
Write a program that will calculate the number of trailing zeros in a factorial of a given number.
*/

function zeros(n) {
  if (n < 5) return 0;
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
}
