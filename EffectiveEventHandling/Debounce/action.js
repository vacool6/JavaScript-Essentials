const section = document.querySelector("section");
const input = document.querySelector("input");

async function getComments(commentString) {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/comments");
    let response = await data.json();

    if (commentString) {
      response = response.filter((e) => {
        if (e.body.includes(commentString)) {
          return e;
        }
      });
    }

    section.innerHTML = "";
    for (let res of response) {
      const h2 = document.createElement("h2");
      const h3 = document.createElement("h3");
      const h4 = document.createElement("h4");
      const h5 = document.createElement("h5");
      const div = document.createElement("div");
      h2.append(res.id);
      h3.append(res.body);
      h4.append(res.email);
      h5.append(res.name);

      div.append(h2);
      div.append(h3);
      div.append(h4);
      div.append(h5);

      section.append(div);
    }
  } catch (err) {
    console.log("ERROR", err);
  }
}

// Load all comments on initial load
getComments();

// Without debouncing
// input.addEventListener("input", async () => {
//   getComments(input.value);
// });

// With debouncing
let ID;

input.addEventListener("input", async () => {
  function debounce() {
    clearTimeout(ID);
    ID = setTimeout(() => {
      getComments(input.value);
    }, 1000);
  }
  debounce();
});
