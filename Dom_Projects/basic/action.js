// Selection
const header1 = document.querySelector(".header1");

// header1.addEventListener('NAME of the EVENT','CALLBACK FUNCTION')
// ADd desired Event
header1.addEventListener("click", () => {
  console.log("I am pressed!");
  // Manipulate the element
  //   header1.innerHTML = "<i>Changed!</i>";
  //   header1.innerText = "Changed!";
  header1.style.backgroundColor = "#7E5D29";
});
