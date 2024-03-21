const menu = document.getElementById("drawer");

const menuToggler = document.getElementById("menu-toggler");

menuToggler.addEventListener("change", () => {
    let isMenuHidden = !menuToggler.checked;

    if (isMenuHidden) {
        menu.classList.replace("reset-slide", "slide-left");
    } else {
        menu.classList.replace("slide-left", "reset-slide");
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