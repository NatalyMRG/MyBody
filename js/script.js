/*Burger-menu*/

var burger = document.querySelector('.burger_menu');
var menuList = document.querySelector('.nav_list');
var phoneList = document.querySelector('.nav_phone');


function openBurgerMenu() {
    menuList.classList.toggle('active_menu');
    phoneList.classList.toggle('active_menu');
}

burger.addEventListener('click', openBurgerMenu);

/*Scroll by element*/
var nextBlock = document.getElementById("about_container");
var scrollDown = document.querySelector('.scroll-down');

function handleButtonClick() {
    nextBlock.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
    });
}

scrollDown.addEventListener('click', handleButtonClick);

/*Form back call*/

const btnBackCall = document.querySelector('.back_call');
const modalOverlay = document.querySelector('.modal-overlay');
const formModal = document.querySelector('.form_modal');
const closeForm = document.querySelector('.close_form');

function showModal () {
    modalOverlay.classList.add('modal-overlay_active');
    formModal.classList.add('form_modal-active');
};
function closeModal () {
    modalOverlay.classList.remove('modal-overlay_active');
    formModal.classList.remove('form_modal-active');
};

btnBackCall.addEventListener('click', showModal);
closeForm.addEventListener('click', closeModal);


/*Phone mask*/
document.addEventListener('DOMContentLoaded', () => {
    const phoneElement = document.querySelector('.phone_number');
    const maskOptions = {
      mask: '+{7}(000)000-00-00'
    }
  const mask = IMask(phoneElement, maskOptions);
});



/*Slider*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("discounts_block");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}
