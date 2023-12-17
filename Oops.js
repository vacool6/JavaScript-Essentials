// A programming paradigm is the style of writing the programming language.

// Imperative Programming: Focuses on describing how a program operates by providing
// a sequence of statements that change a program's state.
// EX: Java, C, C++

// Declarative Programming: Emphasizes what the program should accomplish without
// specifying how to achieve it. Examples include functional programming and logic programming.
// EX: SQL, HTML/CSS ,Prolog (for logic programming)

// Object-Oriented Programming (OOP): Organizes code around the concept of objects, which
// bundle data and methods that operate on the data.
// EX: Java, C++

// Functional Programming: Treats computation as the evaluation of mathematical
// functions and avoids changing state and mutable data.
// EX: Haskell, Lisp, Scheme

// Procedural Programming: Involves organizing code into procedures or routines that operate on data.
// EX: CDATASection, Fortran, Pascal, COBOL

// ===================================================================================================

// JavaScript is a multi-paradigm language,
// which means that it is very dynamic in nature and supports various types of
// programming styles, such as object-oriented, imperative, and functional programming.

// 4 Pillars of Object oriented programming:
// Inheritance, Polymorphism, Abstraction, Encapsulation

// Object Prototypes: Is a mechanism by which JS inherits features from one
// and other. Object have a prototype object that acts as a template object.

const arr = [];
// This arr is of type array that inherits properties from template Array object.
arr.push(2);
arr.includes(2);

// All these methods are defined in the Array prototype

// These properties are specific to the type of prototypes.
// EX: {} | Object.prototype -> Unique object prototype
//  [] | Array.prototype -> Unique array prototype
//  console.dir(document.querySelector('body'))
//  String.prototype

// We can add our custom properties or modify existing properties

String.prototype.custom = function () {
  // console.log("Custom is called")
  console.log(this.toUpperCase());
};

Array.prototype.pop = function () {
  return "Sorry this feature is disabled";
};

// Factory functions, constructor functions, and JavaScript classes
// are all ways to create objects in JavaScript.

// 1. Factory
// EX-1
function ColorFactory(r, g, b) {
  const color = {};

  color.r = r;
  color.g = g;
  color.b = b;

  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  };

  color.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  };

  return color;
}

const color1 = ColorFactory(100, 200, 155);
const color2 = ColorFactory(140, 100, 255);

// EX-2
const EmployeeFactory = function (name, joiningDate, location) {
  let salary;

  const instance = {
    name: name,
    joiningDate: joiningDate,
    location: location,

    getEmpDetails: function () {
      return `Name: ${instance.name} is from ${instance.location} was joined on ${instance.joiningDate}`;
    },

    setSalary: function (amount) {
      salary = amount;
    },

    getSalary: function () {
      return `INR :${salary} PA`;
    },
  };

  return instance;
};

// Example usage:
const employee = EmployeeFactory("John Doe", "2023-01-01", "Cityville");
employee.setSalary(50000);
console.log(employee.getEmpDetails());
console.log(employee.getSalary());

//================================================================
// 2. Constructor function
// EX-1
function ColorConstructor(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

ColorConstructor.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r},${g},${b})`;
};

ColorConstructor.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
};

const color3 = new ColorConstructor(100, 200, 155);
const color4 = new ColorConstructor(140, 100, 255);

//EX-2
const EmployeeConstructor = function (name, joiningDate, location) {
  this.name = name;
  this.joiningDate = joiningDate;
  this.location = location;
};

EmployeeFactory.prototype.getEmpDetails = function () {
  return `Name: ${this.name} is from ${this.location} was joined on ${this.joiningDate}`;
};

EmployeeFactory.prototype.setSalary = function (amount) {
  this.salary = amount;
};

EmployeeFactory.prototype.getSalary = function () {
  return `INR :${this.salary} PA`;
};

//================================================================
// 3. JS Classes (Better way)
// EX-1
class ColorClass {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  rgb() {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  }

  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  }
}

const color5 = new ColorClass(99, 99, 99);
const color6 = new ColorClass(199, 199, 189);

//EX-2
class EmployeeClass {
  constructor(name, joiningDate, location) {
    this.name = name;
    this.joiningDate = joiningDate;
    this.location = location;
    this.salary = undefined;
  }

  getEmpDetails() {
    return `Name: ${this.name} is from ${this.location} was joined on ${this.joiningDate}`;
  }

  setSalary(amount) {
    this.salary = amount;
  }

  getSalary() {
    return `INR :${this.salary} PA`;
  }
}
