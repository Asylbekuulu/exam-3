const modalBtn = document.querySelector(".content__btn");
const modalForm = document.querySelector(".form_bgr");
const modal = document.querySelector(".form");


function btnClick() {
    modalForm.style.display = "block";
    modal.style.visibility = "visible"
}
modalBtn.addEventListener("click", btnClick);


const modalInputs = document.querySelectorAll(".form-field");
const formBtn = document.querySelector(".button");



function formClick () {
    for (let i = 0; i < modalInputs.length; i++) {
        const element = modalInputs[i];
        const nameofElem = element.getAttribute("name")
        if(!element.value) {
            alert("Пожалуйста заполните все поля!")
            break;
        }
        else if(element.value){
            formBtn.addEventListener("click", formClose)
        }
        console.log(nameofElem + " :" + element.value);
    }}

function formClose() {
    modalForm.style.display = "none";
    modal.style.opacity = "0";
}
window.onClick = function(event) {
    if (event.target == modalForm) {
        formClose;
    }
}
formBtn.addEventListener("click", formClick);
