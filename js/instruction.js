console.log("loaded instructions");
document
  .querySelector("#fjollesyge_button")
  .addEventListener("click", fjollesyge);

function fjollesyge() {
  console.log("button is here");
  document.querySelector("#fjollesyge").classList.add("my_scale");
  efficiency;
  document.querySelector("#efficiency").textContent = " Symptomer";
  document.querySelector(".info-text h2").textContent =
    "Risicoccus ludificans (fjollesyge-bakterien)";
}

document
  .querySelector("#bidesyge_button")
  .addEventListener("click", changeColor);

function changeColor() {
  console.log("changeColor is here");
  document.querySelector("#bidesyge").classList.add("changeColor");
  document.querySelector(".info-text h2").textContent =
    "Mordobacillus impulsivus (bidesyge-bakterien)";
}

document.querySelector("#babysyge_button").addEventListener("click", babysyge);

function babysyge() {
  console.log("babysyge button is here");
  document.querySelector("#babysyge").classList.add("my_scale2");
  document.querySelector(".info-text h2").textContent =
    "Neonophilus natalis (babysyge-bakterien)";
}
