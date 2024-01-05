// A polyfill is a piece of code  that provides the implementation of a feature or functionality
// that is not natively supported in a particular environment or browser.
// The term "polyfill" is derived from the idea of "filling in" the gaps or providing a substitute
// for missing functionality.

// Polyfills are commonly used to ensure that web applications work consistently across different
// browsers, especially when dealing with older browsers that may not support the latest JavaScript
// features or APIs. They help bridge the compatibility gap by emulating or adding missing
// functionalities, allowing developers to use modern code even in environments that lack native
// support for certain features.

// Examples

// 1
if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchElement, arr) {
    return arr.indexOf(searchElement) !== -1;
  };
}

// 2
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

// 3
Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    if (accumulator) {
      accumulator = cb(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }

  return accumulator;
};

// 4
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }

  return temp;
};

// 5
Function.prototype.myBind = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }

  obj.fn = this;
  return function (...newArgs) {
    return obj.fn(...args, ...newArgs);
  };
};

// 6
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "It's not Callable");
  }

  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }

  const originalFunction = this;
  const boundFunction = function () {
    return originalFunction.apply(context, args);
  };
  return boundFunction;
};
