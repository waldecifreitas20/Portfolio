
const menuToggler = document.getElementById("menu-toggler");

(
    /* TOGGLE MENU VIEW */
    function () {

        const menu = document.getElementById("drawer");
        const body = document.querySelector("body");

        menuToggler.addEventListener("change", () => {
            const mustCloseMenu = !menuToggler.checked;

            if (mustCloseMenu) {
                closeMenu(menu, body);
            } else {
                openMenu(menu, body);
            }

        });

        function openMenu(menu, body) {
            menu.classList.replace("close-aside-menu", "open-aside-menu");
            body.classList.add("opened-menu");
        }

        function closeMenu(menu, body) {
            menu.classList.replace("open-aside-menu", "close-aside-menu");
            body.classList.remove("opened-menu");
        }
    }
)();

(
    /* DISPOSE MENU WHEN ITEMS ARE CLICKED */
    function () {
        const menuDisposers = document.getElementsByClassName('disposer');

        for (const disposer of menuDisposers) {

            disposer.addEventListener("click", () => {
                menuToggler.checked = false;

                let event = new CustomEvent("change");
                menuToggler.dispatchEvent(event);
            });
        }

    }
)();


