"use strict";

const container = document.querySelector(".container");
const result = container.querySelector("#result");
const button = container.querySelector("button");

const charset = "abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_";

// On page loading, initial pass:
getRandomInt();
function getRandomInt() {
  let pass = "";
  for (let i = 1; i <= 20; i++) {
    pass += charset[Math.floor(Math.random() * charset.length)];
  }
  result.value = pass;
}

button.addEventListener("click", () => {
  const length = container.querySelector("#length").value;
  const checkBox = container.querySelector("#mix").checked;
  let pass = "";

  for (let i = 1; i <= length; i++) {
    if (checkBox === true && i % 3 === 0) {
      pass += charset[Math.floor(Math.random() * charset.length)].toUpperCase();
    } else {
      pass += charset[Math.floor(Math.random() * charset.length)];
    }
  }

  result.value = pass;
});
