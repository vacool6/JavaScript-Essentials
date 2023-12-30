// Call stack: JS uses it to keep track of its place in the script
// or what function is currently being executed.

// Stack follows First in Last out order.

// EX:
function multiply(a, b) {
  return a * b;
}
function square(x) {
  return multiply(x, x);
}

function isRightAngled(p, q, r) {
  return square(p) + square(q) === square(r);
}

// JS is single threaded meaning it can execute single line of code at any instance

// EX:
console.log("logs a");
setTimeout(function () {
  console.log("logs b");
}, 0);
console.log("logs c");

// Browsers (which are written in C++) come with WEB APIs that can handle background tasks like
// setTimeout, setInterval, Http req-res. JS call stack recognizes these and passes them to browser
// Once browser finishes them they are returned & are pushed onto stack as "CALLBACK".

// Callback hell (Pyramid of hell)

// EX 1:
const delayedColorChange = (newColor, delay, next) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    next && next();
  }, delay);
};

delayedColorChange("red", 1000, () => {
  delayedColorChange("pink", 1000, () => {
    delayedColorChange("orange", 1000, () => {
      delayedColorChange("yellow", 1000, () => {
        delayedColorChange("green", 1000);
      });
    });
  });
});

//========================//

// EX 2:
const fakeReqCallback = (url, success, failure) => {
  const delay = Math.random() * 4000 + 500;
  setTimeout(() => {
    if (delay > 2000) {
      return failure("Connection timed out");
    }
    return success(`Here is your data from ${url}`);
  }, delay);
};

fakeReqCallback(
  "/store.com/page1",
  function (res) {
    console.log("It worked", res);
    fakeReqCallback(
      "/store.com/page2",
      function (res) {
        console.log("It worked", res);
        fakeReqCallback(
          "/store.com/page2",
          function (res) {
            console.log("It worked", res);
          },
          function (err) {
            console.log("Error!", err);
          }
        );
      },
      function (err) {
        console.log("Error!", err);
      }
    );
  },
  function (err) {
    console.log("Error!", err);
  }
);

// Promise is a pattern an object representing eventual completion
// or failure of an asynchronous task.

// EX :
const delayedColorChangePromise = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

delayedColorChangePromise("red", 1000)
  .then(() => delayedColorChangePromise("pink", 1000))
  .then(() => delayedColorChangePromise("orange", 1000))
  .then(() => delayedColorChangePromise("yellow", 1000))
  .then(() => delayedColorChangePromise("green", 1000));

// OR we can use async await
async function disco() {
  await delayedColorChangePromise("red", 1000);
  await delayedColorChangePromise("pink", 1000);
  await delayedColorChangePromise("orange", 1000);
  await delayedColorChangePromise("yellow", 1000);
  await delayedColorChangePromise("green", 1000);
}

disco();

// EX 2:
const fakeReqPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 4000 + 500;
    setTimeout(() => {
      if (delay > 2000) {
        reject("Connection timed out");
      }
      resolve(`Here is your data from ${url}`);
    }, delay);
  });
};

fakeReqPromise("/store.com/page1")
  .then((res) => {
    console.log("It works", res);
    return fakeReqPromise("/store.com/page2");
  })
  .then((res) => {
    console.log("It works", res);
    return fakeReqPromise("/store.com/page3");
  })
  .then((res) => {
    console.log("It works", res);
  })
  .catch((err) => {
    console.log("Error!", err);
  });

// Note: To handle errors in async await we can make use of try catch
