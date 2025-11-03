console.log("loaded instructions");
document
  .querySelector("#fjollesyge_button")
  .addEventListener("click", fjollesyge);

function fjollesyge() {
  console.log("button is here");
  document.querySelector("#fjollesyge").classList.add("my_scale");
  efficiency;
  document.querySelector("#efficiency").textContent =
    " Symptomer: Uforklarlig glædesrus, fniseanfald og let overaktivitet. I alvorlige tilfælde: spontant behov for at danse eller sige mærkelige lyde.";
  document.querySelector(".info-text h2").textContent =
    "Corynebacterium ludens (Fjollesyge)";
  document.querySelector(".placeholder").textContent =
    "Corynebacterium er en ægte slægt, der findes naturligt på huden. Ludens betyder ”legende” på latin. Beskrivelse: En gram-positiv, kugleformet bakterie, der udskiller et stof, ludensin, som midlertidigt påvirker dopaminbalancen i hjernen.";
  document.querySelector("#requirement").textContent =
    "Smitteveje: Via tæt kontakt og fælles latter (dråbesmitte). Behandling: Hvile, masser af væske, rolige omgivelser, mindre indtag af sukker. De fleste bliver raske efter et par dage.";
}

document
  .querySelector("#bidesyge_button")
  .addEventListener("click", changeColor);

function changeColor() {
  console.log("changeColor is here");
  document.querySelector("#bidesyge").classList.add("changeColor");
  document.querySelector(".info-text h2").textContent =
    "Pasteurella mordax (Bidesyge)";
  document.querySelector(".placeholder").textContent =
    "Pasteurella er en virkelig slægt, hvor flere arter overføres via dyr (f.eks. katte og hunde). Mordax betyder ”bider” på latin. Beskrivelse: En zoonotisk bakterie, der kan overføres ved dyrekontakt og forårsager irritation i de motoriske centre, hvilket giver impulsive bevægelser og i sjældne tilfælde bidelyst.";
  document.querySelector("#efficiency").textContent =
    "Symptomer: Muskelspændinger omkring kæben, rastløshed, let aggression og trang til at bide folk.";
  document.querySelector("#requirement").textContent =
    "Smitteveje: Overføres gennem spyt eller rifter. Behandling: Antibiotika og rolig miljøterapi.";
}

document.querySelector("#babysyge_button").addEventListener("click", babysyge);

function babysyge() {
  console.log("babysyge button is here");
  document.querySelector("#babysyge").classList.add("my_scale2");
  document.querySelector(".info-text h2").textContent =
    "Streptococcus infantilis (Babysyge)";
  document.querySelector(".placeholder").textContent =
    "Streptococcus er en virkelig bakterieslægt, der findes naturligt i svælg og hud. Infantilis betyder ”barnlig/babyagtig”. Beskrivelse: En gram-positiv kædebakterie, der producerer små mængder af hormonet prolaktin-lignende stof, hvilket kan skabe stærk trang til at beskytte og nusse alt småt.";
  document.querySelector("#efficiency").textContent =
    "Symptomer: Forhøjet empati, trang til at synge stille, beskyttende adfærd, øget trang til at stjæle babyer og generel blød stemmeføring.";
  document.querySelector("#requirement").textContent =
    "Smitteveje: Overføres typisk i institutioner, dagplejer og ved hyppig eksponering for babybilleder. Behandling: Ofte selvbegrænsende kan lindres ved at se på noget grimt i stedet for nuttet.";
}
