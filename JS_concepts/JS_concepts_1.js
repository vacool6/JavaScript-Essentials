// Event management / Handling

// 1. Event capturing: It is the first phase of event propagation. The event is
// captured by outermost element then propagated into the inner element. So the events
// are triggered from outermost and are propagated towards the target element.

element.addEventListener("Any Event", handler(), true);

document.querySelector("div").addEventListener(
  "click",
  () => {
    console.log("We clicked on DIV");
    alert("DIV clicked");
  },
  true
);

document.querySelector("p").addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("We clicked on PARA");
    alert("PARA clicked");
  },
  true
);

document.querySelector("button").addEventListener(
  "click",
  (event) => {
    event.stopPropagation();
    console.log("We clicked on BUTTON");
    alert("BUTTON clicked");
  },
  true
);

// 2. Event bubbling: It is the 2nd phase of event propagation. When the event is first captured by
// the target element it is bubbled/propagated to the outermost element.

document.querySelector("div").addEventListener("click", () => {
  console.log("We clicked on DIV");
  alert("DIV clicked");
});

document.querySelector("p").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("We clicked on PARA");
  alert("PARA clicked");
});

document.querySelector("button").addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("We clicked on BUTTON");
  alert("BUTTON clicked");
});

element.addEventListener("Any Event", handler());
element.addEventListener("Any Event", handler(), false);

// 3. Event propagating: It is the combination of event capturing followed by event bubbling.
// First they follow capturing phase then they follow bubbling phased. To stop propagation
// we can just stop propagation

document.querySelector("div").addEventListener("click", () => {
  console.log("We clicked on DIV");
  alert("DIV clicked");
});

document.querySelector("p").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("We clicked on PARA");
  alert("PARA clicked");
});

document.querySelector("button").addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("We clicked on BUTTON");
  alert("BUTTON clicked");
});

// 4. Event delegation: By taking the advantage of event bubbling a single event listener is
// placed on a common ancestor to effectively manage the events for multiple elements.

// Without event delegation

const allLis = document.querySelectorAll("li");

for (let li of allLis) {
  li.addEventListener("click", () => {
    console.log(li.innerText);
  });
}

// With event delegation

const ul = document.querySelector("ul");

ul.addEventListener("click", (event) => {
  console.log(event.target);
});
