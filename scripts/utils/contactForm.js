//open modal
const openModal = document.querySelector(".photograph-header__contact_button");/*button*/
console.log(openModal);
const modalForm = document.querySelector(".contact_modal");/*modal*/
console.log(modalForm);

openModal.addEventListener("click", inputOpenModal);


function inputOpenModal() {
    modalForm.style.display = "block";
  }


//closeModal
const closeModal = document.querySelector(".close");

closeModal.addEventListener("click", inputCloseModal);

function inputCloseModal() {
    modalForm.style.display = "none";
}

