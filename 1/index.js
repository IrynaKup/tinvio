const openBurgerMenuBtn = document.querySelector("#burger-btn1");
const closeBurgerMenuBtn = document.querySelector("#burger-btn2");
const modalMenu = document.querySelector("#modal");

if (openBurgerMenuBtn && closeBurgerMenuBtn && modalMenu) {
  openBurgerMenuBtn.addEventListener("click", () => {
    openBurgerMenuBtn.classList.toggle("open");
    closeBurgerMenuBtn.classList.toggle("open");
    modalMenu.classList.toggle("open");
  });

  closeBurgerMenuBtn.addEventListener("click", () => {
    openBurgerMenuBtn.classList.toggle("open");
    closeBurgerMenuBtn.classList.toggle("open");
    modalMenu.classList.toggle("open");
  });
}
