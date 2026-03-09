
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
    display = document.getElementById(element).style.display;
    if (display == "none") {
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
    alert("Your email has been sent successfully. This is very important to us");
    GiTBtn
})

//=====================OpenImg============================

function OpenImg(){
    var image = document.getElementById('SwiperImg');
    var source = image.src;
    window.open(source);
}

function OpenModal(){
    const modal = document.createElement('div');
    const image = document.createElement('div');
    const src = document.getElementById('SwiperImg1').src;
    image.setAttribute('src', src);
    modal.className = 'modal';
    document.querySelector('.swiper').appendChild(modal);
    modal.appendChild(image);
}