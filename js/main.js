let fontSize = 1;

function main() {
  handleMenuBehavior();
  handleFontSizeControl();
}


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


function handleFontSizeControl() {
  const btnFontBigger = document.getElementById("btn-font-bigger");
  const btnFontSmaller = document.getElementById("btn-font-smaller");
  const body = document.getElementsByTagName("body")[0];

  function increaseFontSize() {
    if (fontSize < 1.5) {
      fontSize *= 1.2;
      body.style.fontSize = `${fontSize}rem`;
    }
  }

  function decreaseFontSize() {
    if (fontSize > 0.8) {
      fontSize -= 0.2;
      body.style.fontSize = `${fontSize}rem`;
    }
  }

  btnFontBigger.addEventListener("click", increaseFontSize);
  btnFontSmaller.addEventListener("click", decreaseFontSize);

}

main();
