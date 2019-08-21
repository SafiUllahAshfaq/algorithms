/**
 * Find all sub arrays of an array whose sum is equal to the given number.
 * @param {[number]} array - Array that needs to be traversed.
 * @param {number} sum - Number that needs to be checked against each sub array.
 */

function sumsFromSubArrays(array, sum) {
  let final = [];
  let temp = [];

  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    let diff = sum - currentValue;
    if (temp.includes(diff)) {
      final.push([currentValue, diff]);
    } else {
      temp.push(currentValue);
    }
  }
  return final;
}
console.time('sumsFromSubArrays');
console.log(sumsFromSubArrays([4, 9, 22, 33, 1, 7, 9, 3], 10));
console.timeEnd('sumsFromSubArrays');

// [1,2,3,4]

// [1]
// [2]
// [3]
// [4]
// [1,2]
// [1,3]
// [1,4]
// [2,3]
// [2,4]
// [3,4]
// [1,2,3]
// [1,2,4]
// [1,3,4]
// [2,3,4]
// [1,2,3,4]

// [1,2,3]

// [1]
// [2]
// [3]
// [1,2]
// [1,3]
// [2,3]
// [1,2,3]
