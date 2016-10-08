var link = document.querySelector(".login");
var modalLogin = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var overlay = document.querySelector(".modal-overlay");
var login = modalLogin.querySelector("[name=login]");
var password = modalLogin.querySelector("[name=password]");
var form = modalLogin.querySelector("form");
var storage = localStorage.getItem("login");

link.addEventListener("click", function (e) {
    e.preventDefault();
    modalLogin.classList.add("modal-content-show");
    overlay.classList.add("overlay-content-show");

    if(storage){
        login.value = storage;
        password.focus();
    }else{
        login.focus();
    }
});
close.addEventListener("click", function (e) {
    e.preventDefault();
    modalLogin.classList.remove("modal-content-show");
    modalLogin.classList.remove("modal-error");
    overlay.classList.remove("overlay-content-show");
});
overlay.addEventListener("click", function () {
    modalLogin.classList.remove("modal-content-show");
    overlay.classList.remove("overlay-content-show");
});
form.addEventListener("submit", function (e) {

    if (!login.value || !password.value){
        e.preventDefault();
        modalLogin.classList.add("modal-error");
    }else {
        localStorage.setItem("login", login.value);
    }
});

window.addEventListener("keydown", function (e) {
    if (e.keyCode === 27){
        modalLogin.classList.remove("modal-content-show");
        overlay.classList.remove("modal-content-show");
        overlay.classList.remove("modal-error");
    }
});


var linkMap = document.querySelector(".how-to-go");
var modalMap = document.querySelector(".modal-content-map");
var closeMap = document.querySelector(".modal-map-close");

linkMap.addEventListener("click", function (e) {
    e.preventDefault();
    modalMap.classList.add("modal-content-show");
    overlay.classList.add("overlay-content-show");
});
closeMap.addEventListener("click", function (e) {
    e.preventDefault();
    modalMap.classList.remove("modal-content-show");
    overlay.classList.remove("overlay-content-show");
});