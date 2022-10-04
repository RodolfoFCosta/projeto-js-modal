const openModalButton = document.querySelector("#open-modal")
const closeModalButton = document.querySelector("#close-modal")
const modal = document.querySelector("#modal")
const fade = document.querySelector("#fade")

const array = [openModalButton, closeModalButton, fade];


const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
}

array.forEach((el) => {
    el.addEventListener("click", () => {
        toggleModal();
    })
})

