function getColdDrink(value) {
  var drink = '';
  try {
    if (value % 3 == 0 && value % 5 == 0) drink = 'No-Thanks';
    else if (value % 3 == 0) drink = 'Pepsi';
    else if (value % 5 == 0) drink = 'Coca-Cola';
    else drink = 'Sorry! You can not get any drink!';
    return drink;
  } catch (error) {
    return error;
  }
}

console.log(getColdDrink(3));
console.log(getColdDrink(5));
console.log(getColdDrink(15));
console.log(getColdDrink('j'));
