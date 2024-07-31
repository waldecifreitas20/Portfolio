let fontSize = 1;

function main() {
  handleMenuBehavior();
  handleFontSizeControl();
  handleFormSubmit();
  handleHomeTechsImage();
}


function handleMenuBehavior() {
  const asideMenu = document.getElementById("top-navbar");
  const btnOpenMenu = document.getElementById("btn-open-menu");
  const btnCloseMenu = document.getElementById("btn-close-menu");
  const menuOptions = document.getElementsByClassName("menu-disposer");
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

  for (const menuOption of menuOptions) {
    menuOption.addEventListener("click", closeMenu);
  }

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

function handleFormSubmit() {
  const btnSubmit = document.getElementById("btn-submit");

  btnSubmit.addEventListener("click", (evt) => {
    evt.preventDefault();
    const name = document.getElementById("input-name").value;
    const email = document.getElementById("input-email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert('Preencha os campos');
      return;
    }

    sendMessage(name, email, message);
  });

  function sendMessage(name, email, message) {
    const url1 = "https://app-email-sender.fly.dev/send-email";

    fetch(url1, {
      headers: {
        'Content-type': 'application/json',
      },
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        message,
      })
    })
      .then(response => {
        console.log(response);
      })
      .then(() => {
        alert("Messagem enviada com sucesso. Em breve estarei entrando em contato com você! :)");
      })
      .catch(e => {
        console.log(e);
      });
  }

}

function handleHomeTechsImage() {
  const img = document.getElementById("techs-top");

  updateHomeImage();

  window.addEventListener("resize", updateHomeImage);

  function updateHomeImage() {
    if (window.innerWidth < 768) {
      img.setAttribute("src", "./assets/images/techs-small.png");
    } else {
      img.setAttribute("src", "./assets/images/techs-big.png");
    }
  }
}

main();
