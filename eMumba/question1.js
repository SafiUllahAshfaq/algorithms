// function findSubArrays(array, sum) {
//   const sortedArray = array.sort((a, b) => a - b);

//   return sortedArray;
// }

// console.log(findSubArrays([4, 3, 2, 16, 7, 5], 9));


function findSubArrays(array, sum) {
  const sortedArray = array.sort((a, b) => a - b);

  return sortedArray;
}

console.log(findSubArrays([4, 3, 2, 16, 7, 5], 9));
