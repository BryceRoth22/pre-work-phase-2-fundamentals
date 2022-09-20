/*
 * Variables, Data Types, and Typing
 */
let wordData;
wordData= "Word list";
console.log(wordData);
let subTotal = 100;
let tax = subTotal * 0.07;
let totalWithTax = tax + subTotal;

/* Data Types */
let obj = {
  key1: "Value 1",
  key2: 3,
  boolean: true,
  obj2: {
     obj2Key1: "value of inner object",
  }
};
console.log(obj.obj2.obj2Key1);

/* Types and Typing Systems */
let variable = "string";
let var1="2";
let var2=5;
let result=var1+var2;
console.log(result); //adding 5 to the end of "2" resulting in "25"
let add= 1+2;
let sub= 2-1;
let multi= 2*4;
let division = 4 / 2;
let mod = 5 % 2;
let string = "String 1 "+"String 2";
console.log(string);

/* Conditionals, Functions, Scope and Loops */
// Equals
let equals = 1 === 1;  // must be same type
console.log(equals);
let equals1 = 1 == '1'  // cam compare different types i.e. int and string
console.log(equals1);
// Greater than
let greaterThan = 5 > 1
// Less than
let lessThan = 2 <10;
//Greater than or equal
let greaterThanEq = 5>=5;
// Less than or equal
let lessThanEq = 4 <= 9;
// Not Equals
let notEquals = 5 !== 2;
let storeA = 3.4;
let storeB = 4.40;
let storeAIsLower = storeA < storeB;
console.log(storeAIsLower);
if (storeAIsLower) {
  console.log("Store A has a lower price.")
} else if (storeB < storeA) {
  console.log("Store B has a lower price.")
} else {
  console.log("Prices are equal.")
}

// Functions

function compareStorePrices (storeA, storeB) {
  let storeAIsLower = storeA < storeB;
  if (storeAIsLower) {
    console.log("Store A has a lower price.")
  } else if (storeB < storeA) {
    console.log("Store B has a lower price.")
  } else {
    console.log("Prices are equal.")
  }
}
compareStorePrices(10, 5);
compareStorePrices(7, 10);

function squareNum (number) {
  return number * number;
}
let squaredNumber = squareNum(7);
console.log(squaredNumber);

/* Scope - certain variable accessible only at certain levels in code */
let x = 10; //Global scope

function addNumbers (n, m, x) { //Function scope
  console.log(x);
  let b;
  if (1 === 1) {           //Block scope
    b = 8;
  }
  console.log(b);
 return n + m;
}
addNumbers(2, 3, 8);
console.log(x);

/* Arrays */
//              0 1 2 3 4        Zero indexed
let ourArray = [1,2,3,4,5];
console.log(ourArray[4]);

/* Loops */
let ourArray1 = [3,4,5,6,7,8,9];
for (counter; comp; incr)
let arrLen = ourArray1.length;
for (let i = 0;i<=arrLen; i++) {
  console.log("i is equal to: " + i);
}

/* While loop */

let x= 0;
 while (x<10) {
    console.log('Ran '+x);
    x=x+1;
 }

/* APIs  Objects  and  Interfaces */

let dog = {
  name: "Steve",
  color: "brown",
  breed: "Pug",
  size: "Small",
  bark: function (typeOfBark) {
    console.log("Bark!");
  },
};
dog.bark();

/* APIs - Application Programming Interface */
// Rest API - use URLs

/* Passing by Value and Passing by Reference */

function x(y) {
  y.num=y.num+5;
  console.log(y);
}

let y = {
  name: "Tom",
  num: 10,
};
let y=10;
x(y);
console.log(y);



