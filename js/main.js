const html = document.querySelector("html");
const btn = document.querySelector(".darkmode");

function toggleTheme() {
  html.classList.toggle("dark");
}

btn.addEventListener("click", toggleTheme);

// console.log(" dark mode knap test");
// document.querySelector(".darkmode").addEventListener("click", darkModeBtn);

// function darkModeBtn() {
//   console.log("button is here");
//   document.querySelector(".darkmode button").textContent = "Light mode";
// }
