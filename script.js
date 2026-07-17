const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    menu.classList.toggle("active");

});