/* Mobile Menu */
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());






/* SLOT BOOKING -> Mode Selection */
const gameSelect = document.getElementById("gameSelect");
const modeSelect = document.getElementById("modeSelect");

const gameModes = {
  BGMI: ["Solo", "Duo", "Squad"],
  "FREE FIRE": ["Solo", "Duo", "Squad"],
  COD: ["Solo", "Duo", "Squad"],
  VALORANT: ["Squad"],
  CS2: ["Squad"],
  FIFA: ["Solo"]
};

if (gameSelect && modeSelect) {
  gameSelect.addEventListener("change", () => {
    const allowedModes = gameModes[gameSelect.value] || [];

    [...modeSelect.options].forEach(option => {
      if (!option.value) return;
      option.hidden = !allowedModes.includes(option.value);
      option.disabled = !allowedModes.includes(option.value);
    });

    modeSelect.value = "";
  });
}



/* Click game → jump to Book Slot → auto-select game */
const gameLinks = document.querySelectorAll(".game-link");

if (gameLinks.length && gameSelect) {
  gameLinks.forEach(link => {
    link.addEventListener("click", () => {
      const game = link.getAttribute("data-game");
      if (!game) return;

      gameSelect.value = game;
      gameSelect.dispatchEvent(new Event("change"));
    });
  });
}



/* Enable Register button only when Payment ID is entered */
const paymentInput = document.getElementById("paymentId");
const registerBtn = document.getElementById("registerBtn");

if (paymentInput && registerBtn) {
  paymentInput.addEventListener("input", () => {
    registerBtn.disabled = paymentInput.value.trim() === "";
  });
}



/* SUCCESSFUL SLOT BOOKING -> MESSAGE */
const slotForm = document.querySelector(".slot-form");
const popup = document.getElementById("successPopup");
const closePopup = document.getElementById("closePopup");

if (slotForm && popup && closePopup) {
  slotForm.addEventListener("submit", (e) => {
    e.preventDefault();
    popup.classList.add("show");
    slotForm.reset();
    registerBtn && (registerBtn.disabled = true);
  });

  closePopup.addEventListener("click", () => {
    popup.classList.remove("show");
  });
}




/* Initialize Swiper -> For ORGANIZERS */
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Responsive Breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});