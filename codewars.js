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
