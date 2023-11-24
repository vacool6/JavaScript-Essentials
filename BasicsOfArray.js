// 1. In JS an array can store anything
const arr_1 = [
  1,
  2,
  false,
  null,
  undefined,
  function greet() {
    console.log("Hello");
  },
  [true, { name: "example", age: 30 }],
];

console.log(arr_1.length);

// 2. Arrays can grow/shrink
// Push => add element @End
// Unshift => add element @Start
// Pop => remove element from End
// Shift => remove element from Start

const arr_2 = [];

arr_2.push(1);
arr_2.push(true);
arr_2.push("str");
// [1,true,'str']

arr_2.unshift(20);
arr_2.unshift(null);
// [null,20,1,true,'str']

arr_2.pop();
// [null,20,1,true]

arr_2.shift();
arr_2.shift();
// [1,true]

// 3. Using the above methods we can build Queue & Stack DS
// Queue => First in First out (FIFO)
arr_2.push("a"); // ['a']
arr_2.push("b"); // ['a','b']
arr_2.push("c"); // ['a','b','c']
arr_2.unshift(); // ['b','c']
arr_2.unshift(); // ['c']
arr_2.unshift(); // []

// Stack => First in Last out (FILO)
arr_2.push("a"); // ['a']
arr_2.push("b"); // ['a','b']
arr_2.push("c"); // ['a','b','c']
arr_2.pop(); // ['a','b']
arr_2.pop(); // ['a']
arr_2.pop(); // []

// 4.
// CONCAT:
const arr_3 = [1, 2, 3].concat(["a", "b", "c"]);
// [1, 2, 3, 'a', 'b', 'c']

// REVERSE:
arr_3.reverse();
// ['c', 'b', 'a', 3, 2, 1]

// JOIN:
arr_3.join(); // '1,2,3,a,b,c'
arr_3.join(""); // '123abc'
arr_3.join("--"); // '1--2--3--a--b--c'

// // INDEX_OF & LASE_INDEX_OF
// ['a','d','false','a','false'].indexOf('a') // 0

// ['a','d','false','a','false'].lastIndexOf('false') // 4

// ['a','d','false','a','false'].lastIndexOf('a') // 3

// // INCLUDES
// ['a','d','false','a','false'].includes('b') // false

// ['a','d','false','a','false'].includes('a') // true

// 5. Array methods

// forEach was very popular before forOf
// [10,20,33,45].forEach(function(e){
//   console.log(e)
// })

// // map()
// const newArr = [10,20,33,45].map(function(e){
//   return e*100
// })

// // filter()
// [10,20,33,45].filter(function(e){
//   return e>20
// })

// // some()

// [1,2,3,4].some((element) => {
//   return element % 2 === 0;

// }) // true

// // every()
// [1,2,3,4].every((element) => {
//   return element % 2 === 0;

// }) //false

// [2,4,6,8].some((element) => {
//   return element % 2 === 0;

// }) //true
