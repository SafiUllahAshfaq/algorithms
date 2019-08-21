function multiDimArray({ rows, cols, dim, value }) {
  var holder = value ? value : 0;
  return rows && cols
    ? new Array(rows).fill(new Array(cols).fill(holder))
    : new Array(dim).fill(new Array(dim).fill(holder));
}

function multiDimArrayWithDifferentValues({ rows, cols, dim, value, desc }) {
  var holder = value ? value : 0;
  //   var array =
  //     rows && cols
  //       ? new Array(rows).fill(new Array(cols).fill(holder))
  //       : new Array(dim).fill(new Array(dim).fill(holder));
  var array =
    rows && cols
      ? Array.apply(null, Array(rows)).map(() => new Array(cols).fill(0))
      : Array.apply(null, Array(dim)).map(() => new Array(dim).fill(0));
  var start = value ? value : 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      array[i][j] = desc ? start-- : start++;
    }
  }
  return array;
}

// console.log(multiDimArray({ dim: 4 }));
console.log(multiDimArrayWithDifferentValues({ dim: 5, desc: false }));

//** Below Function needs an O P E R A T I O N.... */
//** Below Function needs an O P E R A T I O N.... */
//** Below Function needs an O P E R A T I O N.... */
//** Below Function needs an O P E R A T I O N.... */
// function createMultiDimArray(dimension) {
//   //! 1
//   //   var array = new Array(dimension).fill(new Array(dimension).fill(0));

//   //! 2
//   var array = Array.apply(null, Array(dimension)).map(() =>
//     new Array(dimension).fill(0)
//   );

//   //! 3
//   //   var array = new Array(dimension);
//   //   for (let i = 0; i < array.length; i++)
//   //     array[i] = new Array(dimension).fill(0);
//   var value = 0;

//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       array[i][j] = ++value;
//       console.log(i, j, array);
//     }
//   }
//   return array;
// }

// console.log(createMultiDimArray(2));
