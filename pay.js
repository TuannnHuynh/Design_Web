// de-increase product
let count = 1;
let total = 101000;
const value = document.querySelector("#value");
const pay = document.querySelector("#in-total");
const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            if (count != 1) {
                count--;
            }
        }
        else if (styles.contains("increase")) {
            count++;
        }
        value.textContent = count;
        pay.textContent = new Intl.NumberFormat().format(total * count);
    })
})

//effect modal
var btnBuy = document.querySelector(".btn-open");
var modal = document.querySelector(".modal")
var iconClose = document.querySelector(".modal-header i");
var btnClose = document.querySelector(".btn-back");

function toggleModal(e) {
    console.log(e.target);
    modal.classList.toggle("dis-none")
}

btnBuy.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);
iconClose.addEventListener("click", toggleModal);
modal.addEventListener("click", function (e) {
    if (e.target == e.currentTarget) {
        toggleModal();
    }
});