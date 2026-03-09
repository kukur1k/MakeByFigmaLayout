
//============================Swiper===================================
const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 40,
  centeredSlides: true,
  initialSlide: 1,

  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },

});

// ================================FAQ========================

function openBox(element, plusimg) {
    display = document.getElementById(element);
    if (display.offsetParent == null) {
        document.getElementById(element).style.display = "block";
        document.getElementById(plusimg).src = "pict/Frame minus.svg"

    } else{
        document.getElementById(element).style.display = "none";
        document.getElementById(plusimg).src = "pict/Frame plus.svg"
    }
}

//=====================FormEnter=========================
const GiTBtn = document.getElementById('TouchBtn');
GiTBtn.addEventListener('click', function() {
    const form = document.querySelector('.form');
    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(element => {
        element.value = '';
    });

    alert("Your email has been sent successfully. This is very important to us");
})

//=====================OpenImg============================

function OpenImg(element){
    var source = element.src;
    window.open(source);
}
