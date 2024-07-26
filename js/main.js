function handleMenuBehavior() {
  const asideMenu = document.getElementById("top-navbar");
  const btnOpenMenu = document.getElementById("btn-open-menu");
  const btnCloseMenu = document.getElementById("btn-close-menu");
 
  const body = document.getElementsByTagName("body")[0];

  
  
  function openMenu() {
    asideMenu.className = "open-menu";
    body.className = "disable-scroll";
  }
  
  function closeMenu() {
    asideMenu.className = "close-menu";
    body.className = "enable-scroll";
  }

  btnOpenMenu.addEventListener("click", openMenu);
  btnCloseMenu.addEventListener("click", closeMenu);

}

handleMenuBehavior();