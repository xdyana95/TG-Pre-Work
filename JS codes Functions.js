const takeOrder = () => {
  console.log('Order: pizza');
}
takeOrder ();


const takeOrder = (topping) => {
  console.log('Order: pizza topped with '+topping);
};

takeOrder('pepperoni');

const takeOrder = (topping, crustType) => {
  console.log(`Order: ${crustType} pizza topped with ${topping}`);
}

takeOrder('jalapenos', 'Cicilian');
takeOrder('meatballs','thin crust');
takeOrder('pepperoni','medium crust');



let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

console.log(getSubTotal(orderCount));


let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = (itemCount) => {
  return getSubTotal(itemCount) * 0.06
}

const getTotal = (itemCount) => {
  return getTax(itemCount) + getSubTotal(itemCount)
}

console.log(getSubTotal(orderCount));

console.log(getTotal(orderCount))

function isGreaterThan (numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return true;
  } else {
    return false;
  }
}

isGreaterThan(5,8);


const isGreaterThan = (numberOne, numberTwo) => {
  if(numberOne > numberTwo){
    return true;
  } else {
    return false;
  }
};

isGreaterThan(4, 8)


const volumeOfSphere = diameter => (1/6) * Math.PI * diameter * diameter * diameter;

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');
