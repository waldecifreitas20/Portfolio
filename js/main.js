const menu = document.getElementById("menu");

const menuToggler = document.getElementById("menu-toggler");

menuToggler.addEventListener("change", () => {
    let isMenuHidden = !menuToggler.checked;

    if (isMenuHidden) {
        menu.classList.replace("reset-slide", "slide-left");
    } else {
        menu.classList.replace("slide-left", "reset-slide");
    }

})