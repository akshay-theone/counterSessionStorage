let counterDiv = document.querySelector(".counterDiv");
let incBtn = document.querySelector("#inc-btn");
let decBtn = document.querySelector("#dec-btn");
let counter = 0;
incBtn.addEventListener("click", () => {
  counter = counter + 1;
  counterDiv.innerText = counter;
  sessionStorage.setItem("counter", counter);
  counterUpdate();
  console.log(counter);
});
decBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter = counter - 1;
    counterDiv.innerText = counter;
    sessionStorage.setItem("counter", counter);
    counterUpdate();
    console.log(counter);
  }
});

function counterUpdate() {
  counter = parseInt(sessionStorage.getItem("counter", counter) || 0);
  counterDiv.innerText = counter;
  console.log(counter);
}

counterUpdate();
