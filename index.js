const tabs = document.querySelectorAll(".features__tab");
const contents = [
  document.querySelector("#chats-content"),
  document.querySelector("#orders-content"),
  document.querySelector("#payments-content")
];

tabs.forEach((tab, index) => {
  if (tab && contents[index]) {
    tab.addEventListener("click", () => {
      
      tabs.forEach(t => t.classList.remove("active"));
      
      contents.forEach(c => {
        if (c) c.classList.remove("active");
      });
      tab.classList.add("active");
      contents[index].classList.add("active");
    });
  }
});

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