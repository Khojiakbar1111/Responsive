const siteHeaderNav = document.querySelector(".site-header__nav");

const toggleBtn = document.querySelector(".toggle");

const siteHeader__toggleIcon = document.querySelector(
  ".site-header__toggle-icon"
);

toggleBtn.addEventListener("click", () => {
  siteHeaderNav.classList.toggle("hide");

  if (siteHeaderNav.classList.contains("hide")) {
    siteHeader__toggleIcon.src = "./icons/close.svg";
  } else {
    siteHeader__toggleIcon.src = "./icons/navbar-toggler.svg";
  }
});
