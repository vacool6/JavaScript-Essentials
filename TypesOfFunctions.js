//1) Function
function greet(name) {
  return `$Hello! ${name}`;
}

//2) Anonymous functions (Functions that do no have a name)

//a. Function expression
const greet = function (name) {
  return `$Hello! ${name}`;
};

//b. Arrow function
const greet = (name) => {
  return `$Hello! ${name}`;
};

//c. Arrow function one liner
const greet = (name) => `$Hello! ${name}`;

//3) Higher order functions
// Pass other functions as args
// Return function

//a.
const hello = (name) => `$Hello! ${name}`;
//--------- OR ---------------/
function hello(name) {
  return `$Hello! ${name}`;
}

function greet(func, name) {
  return func(name);
}

//b. greet('name')()
function greet(name) {
  return function () {
    return `$Hello! ${name}`;
  };
}
//---------- OR ----------------//
const greet = (name) => {
  return () => `$Hello! ${name}`;
};

//4) First class functions:-
// Assigning a function to a variable
// Passing a function as an argument
// Returning a function

// NOTE:- Its a good practice to wrap the body of function in try-catch block

// 5) Callback function
// A callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of
// routine or action.

const hello = (name) => `$Hello! ${name}`;
//--------- OR ---------------//
function hello(name) {
  return `$Hello! ${name}`;
}

function greet(func) {
  const name = prompt("Please enter your name");
  return func(name);
}
//--------- OR ---------------//
const greet = (func) => {
  const name = prompt("Please enter your name");
  return func(name);
};

// 6) Non-deterministic functions
const randomGen = () => {
  return Math.random();
};

// 7) Non-deterministic functions with Side effect

let num = 0;
function change1() {
  return (num += Math.random());
}

// 8) Deterministic functions with Side effect
console.log("Anything!");

let val = 0;

function change2() {
  val += 10;
  return true;
}

// 9) Pure functions = Are deterministic with no-side effects (All math functions)
const sqr = (num) => {
  return num ** 2;
};

function cube(num) {
  return num ** 3;
}

const circleArea = (radius) => {
  return 3.14 * sqr(radius);
};
