function handleMenuBehavior() {
  const asideMenu = document.getElementById("top-navbar");
  const btnOpenMenu = document.getElementById("btn-open-menu");
  const btnCloseMenu = document.getElementById("btn-close-menu");

  function openMenu() {
    asideMenu.className = "open-menu";
  }

  function closeMenu() {
    asideMenu.className = "close-menu";
  }

  btnOpenMenu.addEventListener("click", openMenu);
  btnCloseMenu.addEventListener("click", closeMenu);

}

handleMenuBehavior();