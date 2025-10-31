console.log("loaded instructions");
document
  .querySelector("#fjollesyge_button")
  .addEventListener("click", fjollesyge);

function fjollesyge() {
  console.log("button is here");
  document.querySelector("#fjollesyge").classList.add("my_scale");
  efficiency;
  document.querySelector("#efficiency").textContent = " Hvad er fjollesyge";
}

document
  .querySelector("#bidesyge_button")
  .addEventListener("click", changeColor);

function changeColor() {
  console.log("changeColor is here");
  document.querySelector("#bidesyge").classList.add("changeColor");
}
