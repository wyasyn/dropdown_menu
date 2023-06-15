const menu = document.querySelector('.col-1');
const close = document.querySelector('.close');
const open = document.querySelector(".menu-icon");

function showMenu(){
    menu.classList.add("active");
}
function closeMenu(){
    menu.classList.remove("active");
}

open.addEventListener("click", showMenu);
close.addEventListener("click", closeMenu);