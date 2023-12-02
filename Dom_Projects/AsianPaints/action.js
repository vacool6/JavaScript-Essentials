// Selections
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const applyBtn = document.querySelector(".apply");
const resetBtn = document.querySelector(".reset");

// Add event/s
applyBtn.addEventListener("click", function () {
  // console.log(typeof input1.value, input2.value);
  const desiredWall = parseInt(input1.value);
  const selectedWall = document.querySelectorAll("div")[desiredWall - 1];

  selectedWall.style.backgroundColor = input2.value;
  input1.value = "";
  input2.value = "";
});

resetBtn.addEventListener("click", () => {
  for (let div of document.querySelectorAll("div")) {
    div.style.backgroundColor = "white";
  }
});
