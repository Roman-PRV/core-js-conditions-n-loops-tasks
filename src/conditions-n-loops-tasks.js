/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) return a;
  if (b > c) return b;
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) return true;
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === b || a === c || b === c) {
    if (a + b > c && b + c > a && c + a > b) {
      return true;
    }
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let x = '';
  const decimals = Math.floor(num / 10);
  switch (decimals) {
    case 3:
      x = 'XXX';
      break;
    case 2:
      x = 'XX';
      break;
    case 1:
      x = 'X';
      break;
    default:
      x = '';
  }
  const rest = num % 10;
  let result;
  switch (rest) {
    case 9:
      result = 'IX';
      break;
    case 8:
      result = 'VIII';
      break;
    case 7:
      result = 'VII';
      break;
    case 6:
      result = 'VI';
      break;
    case 5:
      result = 'V';
      break;
    case 4:
      result = 'IV';
      break;
    case 3:
      result = 'III';
      break;
    case 2:
      result = 'II';
      break;
    case 1:
      result = 'I';
      break;
    default:
      result = '';
  }
  return x + result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '-':
        result += 'minus';
        break;
      case ',':
        result += 'point';
        break;
      case '.':
        result += 'point';
        break;
      case '0':
        result += 'zero';
        break;
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      default:
    }
    if (i < numberStr.length - 1) result += ' ';
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let reverted = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    const letter = str[i];
    reverted += letter;
  }
  if (str === reverted) return true;
  return false;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (letter === str[i]) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const length = Math.floor(Math.log10(num)) + 1;
  let numTmp = num;
  for (let i = 0; i < length; i += 1) {
    const digitTmp = numTmp - Math.floor(numTmp / 10) * 10;
    numTmp = Math.floor(numTmp / 10);
    if (digit === digitTmp) return true;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  let leftSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum -= arr[i];
    if (leftSum === sum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  for (let y = 0; y < size; y += 1) {
    arr[y] = [];
  }

  let x = 0;
  let y = 0;
  let deltaX = 1;
  let deltaY = 0;
  let limiteMaxX = size;
  let limiteMinX = 0;
  let limiteMaxY = size;
  let limiteMinY = 0;
  for (let number = 1; number <= size * size; number += 1) {
    arr[y][x] = number;
    x += deltaX;
    if (x === limiteMaxX) {
      x = limiteMaxX - 1;
      deltaX = 0;
      deltaY = 1;
    }
    if (x < limiteMinX) {
      x = limiteMinX;
      deltaX = 0;
      deltaY = -1;
      limiteMaxY -= 1;
      limiteMinY += 1;
    }
    y += deltaY;
    if (y === limiteMaxY) {
      y = limiteMaxY - 1;
      x -= 1;
      deltaX = -1;
      deltaY = 0;
    }
    if (y < limiteMinY) {
      y = limiteMinY;
      limiteMinX += 1;
      deltaX = 1;
      deltaY = 0;
      limiteMaxX -= 1;
      x += deltaX;
    }
  }

  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const newMatrix = [];
  for (let x = 0; x < matrix.length; x += 1) {
    const line = [];
    for (let y = matrix.length - 1; y >= 0; y -= 1) {
      line[matrix[x].length - y - 1] = matrix[y][x];
    }
    newMatrix[x] = line;
  }
  const result = matrix;
  for (let x = 0; x < matrix.length; x += 1) {
    for (let y = matrix.length - 1; y >= 0; y -= 1) {
      result[x][y] = newMatrix[x][y];
    }
  }
  return result;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const res = arr;
  let longest = Math.floor(Math.log10(arr[0] < 0 ? arr[0] * -1 : arr[0])) + 1;
  for (let i = 1; i < arr.length; i += 1) {
    let longestTmp =
      Math.floor(Math.log10(arr[i] < 0 ? arr[i] * -1 : arr[i])) + 1;
    if (arr[i] === 0) {
      longestTmp = 1;
    }
    if (longestTmp > longest) longest = longestTmp;
  }

  let tmpArr = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];

  for (let rank = 1; rank <= longest; rank += 1) {
    for (let i = 0; i < res.length; i += 1) {
      let digit;
      if (res[i] < 0) {
        digit = Math.floor(((-1 * res[i]) / 10 ** (rank - 1)) % 10);
      } else {
        digit = Math.floor((res[i] / 10 ** (rank - 1)) % 10) + 10;
      }
      tmpArr[digit][tmpArr[digit].length] = res[i];
    }

    let resIndex = 0;
    for (let rankArr = 9; rankArr >= 0; rankArr -= 1) {
      for (let j = 0; j < tmpArr[rankArr].length; j += 1) {
        res[resIndex] = tmpArr[rankArr][j];
        resIndex += 1;
      }
    }
    for (let rankArr = 10; rankArr < 20; rankArr += 1) {
      for (let j = 0; j < tmpArr[rankArr].length; j += 1) {
        res[resIndex] = tmpArr[rankArr][j];
        resIndex += 1;
      }
    }
    tmpArr = [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
    ];
  }

  return res;
}
/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let modified = str;
  let period = 0;
  do {
    period += 1;
    let evenStr = '';
    let oddStr = '';
    for (let i = 0; i < str.length; i += 1) {
      if (i % 2 === 0) {
        evenStr += modified[i];
      } else {
        oddStr += modified[i];
      }
    }
    modified = evenStr + oddStr;
  } while (modified !== str);

  let iter = iterations % period;
  if (iter === 0) return str;

  let evenStr = '';
  let oddStr = '';
  for (let i = 0; i < str.length; i += 1) {
    if (i % 2 === 0) {
      evenStr += str[i];
    } else {
      oddStr += str[i];
    }
  }
  const res = evenStr + oddStr;

  if (iter === 1) return res;
  iter -= 1;

  return shuffleChar(res, iter);
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const length = Math.floor(Math.log10(number)) + 1;
  const arr = [];
  let numTmp = number;
  for (let i = 0; i < length; i += 1) {
    const digitTmp = numTmp - Math.floor(numTmp / 10) * 10;
    numTmp = Math.floor(numTmp / 10);
    arr[length - i - 1] = digitTmp;
  }

  let firstIndex = 0;
  for (let i = arr.length - 1; i > 0; i -= 1) {
    if (arr[i] > arr[i - 1]) {
      firstIndex = i;
      break;
    }
  }
  if (firstIndex === 0) return number;

  let secondIndex = firstIndex;
  for (let i = firstIndex + 1; i < length; i += 1) {
    if (arr[i] > arr[firstIndex - 1] && arr[i] < arr[secondIndex]) {
      secondIndex = i;
    }
  }

  let temp = arr[firstIndex - 1];
  arr[firstIndex - 1] = arr[secondIndex];
  arr[secondIndex] = temp;

  for (let i = firstIndex; i < length; i += 1) {
    if (arr[i] > arr[i + 1]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      i = firstIndex - 1;
    }
  }

  let res = 0;
  for (let i = 0; i < length; i += 1) {
    res += arr[i] * 10 ** (length - i - 1);
  }
  return res;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
