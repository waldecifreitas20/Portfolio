const menu = document.getElementById("drawer");
const body = document.querySelector("body");
const menuToggler = document.getElementById("menu-toggler");

menuToggler.addEventListener("change", () => {
    let isMenuClosed = !menuToggler.checked;

    if (isMenuClosed) {
        menu.classList.replace("reset-slide", "slide-left");
        body.classList.remove("opened-menu");
    } else {
        menu.classList.replace("slide-left", "reset-slide");
        body.classList.add("opened-menu");
    }

});

const disposers = document.getElementsByClassName('disposer');

for (const disposer of disposers) {
    disposer.addEventListener("click", () => {
        menuToggler.checked = false;

        let event =  new CustomEvent("change");
        menuToggler.dispatchEvent(event);
    });
}

