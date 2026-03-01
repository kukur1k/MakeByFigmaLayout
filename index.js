
//============================Swiper===================================
const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 40,
  centeredSlides: true,
  initialSlide: 1,




  // Navigation arrows
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },

});

// ================================FAQ========================

function openBox(element, plusimg) {
    display = document.getElementById(element).style.display;
    if (display == "none") {
        document.getElementById(element).style.display = "block";
        document.getElementById(plusimg).src = "Frame minus.svg"

    } else{
        document.getElementById(element).style.display = "none";
        document.getElementById(plusimg).src = "Frame plus.svg"
    }
}