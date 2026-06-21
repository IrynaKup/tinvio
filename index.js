// Находим все контент-блоки
const contents = [
  document.querySelector("#chats-content"),
  document.querySelector("#orders-content"),
  document.querySelector("#payments-content")
];
const allTabs = document.querySelectorAll(".features__tab");

allTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const parentTabsContainer = tab.parentElement;
    const clickedIndex = Array.from(parentTabsContainer.children).indexOf(tab);
    contents.forEach(c => { if (c) c.classList.remove("active"); });
    if (contents[clickedIndex]) {
      contents[clickedIndex].classList.add("active");
    }
  });
});

$(document).ready(function(){
  $('.single-item').slick({
    dots: true,       
    arrows: true,     
    infinite: true,   
    speed: 300,        
    slidesToShow: 1,   
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>'

  });
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
