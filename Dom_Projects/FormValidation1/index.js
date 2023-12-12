function ageChange(e) {
  const age = parseInt(e.target.value);
  if (age < 5) {
    document.querySelector("button").disabled = true;
    document.querySelector("#errors-holder").innerHTML =
      "You need to be atleast 5 years old to participate";
  } else {
    document.querySelector("form button").disabled = false;
    document.querySelector("#errors-holder").innerHTML = "";
  }
}

function handleSubmit(e) {
  document.querySelector("#errors-holder").innerHTML = "";
  e.preventDefault();
  const age = +document.querySelector("#q_age").value;
  if (age === 0) {
    document.querySelector("#errors-holder").innerHTML = "Please choose age";
    return;
  }
  const ownsPhone = document.querySelector("#q_owns_phone").checked;
  if (ownsPhone) {
    if (age < 13) {
      document.querySelector("#result-holder").innerHTML =
        "You are too young to have a phone";
    } else {
      document.querySelector("#result-holder").innerHTML =
        "Use your phone in moderation";
    }
  } else {
    if (age < 13) {
      document.querySelector("#result-holder").innerHTML =
        "You will get a phone soon";
    } else {
      document.querySelector("#result-holder").innerHTML =
        "You should get a phone";
    }
  }
}
