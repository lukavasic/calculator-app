let theme1 = document.getElementById("theme1");
let theme2 = document.getElementById("theme2");
let theme3 = document.getElementById("theme3");

theme1.addEventListener("click", () => {
  document.body.classList.remove("theme2");
  document.body.classList.remove("theme3");
});

theme2.addEventListener("click", () => {
  document.body.classList.remove("theme3");
  document.body.classList.add("theme2");
});

theme3.addEventListener("click", () => {
  document.body.classList.remove("theme2");
  document.body.classList.add("theme3");
});
