function swap1(num) {
  let obj = {
    5: 4,
    4: 5
  };
  return obj[num];
}

function swap2(num) {
  let obj = new Map();
  obj.set(4, 5);
  obj.set(5, 4);
  console.log(obj.values());
  console.log(obj.keys());
  console.log(obj.get(num));
  return obj.get(num);
}

// console.log(`********swap1********\n${swap1(4)}`);
// console.log(`********swap2********\n${swap2(4)}`);
// console.log(`********swap2********`);
// console.log(swap2(4));

function* generator(array) {
  for (let i = 0; i < array.length; i++) yield array[i];
}

console.log(`********generator********`);
for (let i of generator([2, 4, 5, 6])) {
  console.log(i);
}
const gen = generator([2, 4]);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
