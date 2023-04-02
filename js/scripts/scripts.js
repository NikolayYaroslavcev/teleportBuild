"use strict";

var swiper = new Swiper(".mySwiper", {
  centeredSlides: false,
  // slidesPerView: 5,

  breakpoints: {
    320: {
      slidesPerView: 1
    },
    785: {
      slidesPerView: 2
    },
    1166: {
      slidesPerView: 4
    },
    1298: {
      slidesPerView: 3
    },
    1621: {
      slidesPerView: 5
    }
  },
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

//////////////img///////////

var previewImage = document.querySelector('.preview-image');
var faceCertificateImages = document.querySelector('.images-fake');
var d = document.querySelector(".images-fake");
var getStyle = function getStyle(el, prop) {
  return window.getComputedStyle ? getComputedStyle(el)[prop] : el.currentStyle[prop];
};
faceCertificateImages.addEventListener('click', function (e) {
  if (e.target.closest('.img-fake')) {
    var back = getStyle(e.target, "backgroundImage").split(',')[1];
    previewImage.style.backgroundImage = back;
  }
});
/////////////// RADIO////////

var radioBtns = document.querySelectorAll("input[name='radio']");
var result = document.getElementById("result");
var findSelected = function findSelected() {
  var selected = document.querySelector("input[name='radio']:checked").value;
  var res = result.innerText = "".concat(selected, " BYN");
  console.log(res);
};
radioBtns.forEach(function (radioBtn) {
  radioBtn.addEventListener("change", findSelected);
});
findSelected();