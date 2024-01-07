const button = document.querySelector("button");
let isThrottled = false;

async function getComments() {
  try {
    const id = Math.ceil(Math.random() * 100);
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/comments/${id}`
    );
    let response = await data.json();

    console.log(response);
  } catch (err) {
    console.log("ERROR", err);
  }
}

// Without throttling
// button.addEventListener("click", () => {
//   getComments();
// });

// With throttling

button.addEventListener("click", () => {
  const timer = 2000;
  if (!isThrottled) {
    // Until the timer expires we will not make another api call
    isThrottled = true;

    getComments();

    setTimeout(() => {
      isThrottled = false;
    }, timer);
  }
});
