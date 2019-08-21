/**
 * Find pairs of values in array whose sum is equal to the given number.
 * @param {[number]} array - Array that needs to be traversed
 * @param {number} sum - Number that needs to be checked against pairs
 */

function sums(array, sum) {
  let final = [];
  let temp = [];

  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    let diff = sum - currentValue; // 4 = 10 - 5
    if (temp.includes(diff)) {
      final.push([currentValue, diff]);
    } else {
      temp.push(currentValue);
    }
  }
  return final;
}
console.time('sums');
console.log(sums([4, 9, 22, 33, 1, 7, 9, 3], 10));
console.timeEnd('sums');
