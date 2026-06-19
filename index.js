
const btn1 = document.querySelector(".features__tab:nth-child(1)");
const btn2 = document.querySelector(".features__tab:nth-child(2)");
const btn3 = document.querySelector(".features__tab:nth-child(3)");

const con1 = document.querySelector("#chats-content");
const con2 = document.querySelector("#orders-content");
const con3 = document.querySelector("#payments-content");

if (btn1) {
  btn1.addEventListener("click", () => {
    btn2.classList.remove("active");
    con2.classList.remove("active");
    btn3.classList.remove("active");
    con3.classList.remove("active");
    
    btn1.classList.add("active");
    con1.classList.add("active");
  });
}
if (btn2) {
  btn2.addEventListener("click", () => {
    btn1.classList.remove("active");
    con1.classList.remove("active");
    btn3.classList.remove("active");
    con3.classList.remove("active");
    
    btn2.classList.add("active");
    con2.classList.add("active");
  });
}
if (btn3) {
  btn3.addEventListener("click", () => {
    btn1.classList.remove("active");
    con1.classList.remove("active");
    btn2.classList.remove("active");
    con2.classList.remove("active");
    
    btn3.classList.add("active");
    con3.classList.add("active");
  });
}

if (btn1 && btn2 && btn3) {
  btn1.addEventListener("click", () => { reset(); btn1.classList.add("active"); con1.classList.add("active"); });
  btn2.addEventListener("click", () => { reset(); btn2.classList.add("active"); con2.classList.add("active"); });
  btn3.addEventListener("click", () => { reset(); btn3.classList.add("active"); con3.classList.add("active"); });
}
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
