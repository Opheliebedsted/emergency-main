const form = document.querySelector("form");

const first_name_output = document.querySelector(".first_name_output");
const last_name_output = document.querySelector(".last_name_output");
const age_output = document.querySelector(".age_output");
const postnumber_output = document.querySelector(".postnumber_output");
const date_output = document.querySelector(".date_output");
const bacteria_output = document.querySelector(".bacteria_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

form.addEventListener("invalid", cancelPopup, true);

function handleSubmit(event) {
  // 1. undgå refresh
  event.preventDefault();
  // 2. samle data op
  // 3. vise data
  // 4. evt. nustil formular
  form.reset();
}

form.addEventListener("submit", handleSubmit);

const firstOutput = document.querySelector(".firstOutput");

function handleSubmit(event) {
  console.log("submit is here");
  event.preventDefault();

  const formData = new FormData(form);
  const firstName = formData.get("Fornavn");
  const lastName = formData.get("Efternavn");
  const age = formData.get("Alder");
  const postnumber = formData.get("Postnummer");
  const date = formData.get("DatoForSymptomer");
  const bacteria = formData.get("Sygdom");

  first_name_output.textContent = firstName;
  last_name_output.textContent = lastName;
  age_output.textContent = age;
  postnumber_output.textContent = postnumber;
  date_output.textContent = date;
  bacteria_output.textContent = bacteria;
  form.reset();
}
