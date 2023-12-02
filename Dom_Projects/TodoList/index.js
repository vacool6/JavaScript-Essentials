const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

let todoS = [];

function addElementsToTodo() {
  ul.innerHTML = "";
  for (let i of todoS) {
    const newTodo = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");

    span.innerText = i;
    btn.innerText = "Remove todo";
    btn.addEventListener("click", () => {
      remove(i);
    });

    newTodo.append(span);
    newTodo.append(btn);
    ul.append(newTodo);
  }
}

const remove = (ele) => {
  todoS = todoS.filter((todo) => {
    return todo !== ele;
  });
  addElementsToTodo();
};

button.addEventListener("click", () => {
  todoS.push(input.value);
  addElementsToTodo();
  input.value = "";
});
