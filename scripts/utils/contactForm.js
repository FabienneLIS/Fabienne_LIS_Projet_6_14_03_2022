//open modal
const openModal = document.querySelector(
  ".photographer__main__header__contactButton"
);
//body
const mainpage = document.querySelector(".main-page");
//button
const modalForm = document.querySelector(".contact_modal");

//modal
/*const open = function inputOpenModal {
  
}*/
openModal.addEventListener("click", (event) => {
  event.preventDefault();
  mainpage.setAttribute("aria-hidden", true);
  openModal.setAttribute("aria-hidden", false);

  openModal.focus();
  /*modalForm.style.display = "block";*/
});

//closeModal
const closeModal = document.querySelector(".modal_header-close");

closeModal.addEventListener("click", () => {
  /*modalForm.style.display = "none";*/
});

//Nom prénom

//Fonction qui autorise que des lettres ou des chiffres
function hasOnlyLetters(string) {
  const regexToMatch = new RegExp("[a-zA-Zéèàôîê]+", "g");
  return regexToMatch.test(string);
}

//Name
const firstName = document.querySelector(".firstName");
const inputErrorFirstName = document.querySelector(".errorFirstName");

firstName.addEventListener("change", inputFirstName);

function inputFirstName() {
  if (
    firstName.value.length > 1 &&
    firstName.value.length < 250 &&
    hasOnlyLetters(firstName.value)
  ) {
    firstName.classList.add("valid-input");
    firstName.classList.remove("error-input");
    inputErrorFirstName.innerText = "";
    console.log("firstName", firstName.value);
    return true;
  } else {
    firstName.classList.add("error-input");
    firstName.classList.remove("valid-input");
    inputErrorFirstName.innerText = "Le champ doit avoir 2 lettres minimum.";
    return false;
  }
}

const lastName = document.querySelector(".lastName");
const inputErrorLastName = document.querySelector(".errorLastName");

lastName.addEventListener("change", inputLastName);

function inputLastName() {
  if (
    lastName.value.length > 1 &&
    lastName.value.length < 250 &&
    hasOnlyLetters(lastName.value)
  ) {
    lastName.classList.add("valid-input");
    lastName.classList.remove("error-input");
    inputErrorLastName.innerText = "";
    console.log("lastName", lastName.value);
    return true;
  } else {
    lastName.classList.add("error-input");
    lastName.classList.remove("valid-input");
    inputErrorLastName.innerText = "Le champ doit avoir 2 lettres minimum.";
    return false;
  }
}

//Email
const inputEmail = document.querySelector(".email");
inputEmail.addEventListener("change", validatedEmail);
const inputErrorEmail = document.querySelector(".errorEmail");

function validatedEmail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)) {
    inputEmail.classList.add("valid-input");
    inputEmail.classList.remove("error-input");
    inputErrorEmail.innerText = "";
    console.log("inputemail", inputEmail.value);
    return true;
  } else {
    inputEmail.classList.add("error-input");
    inputEmail.classList.remove("valid-input");
    inputErrorEmail.innerText = "L'adresse mail n'est pas valide.";
    return false;
  }
}
