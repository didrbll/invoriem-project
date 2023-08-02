$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
        // stagePadding: 50,
        margin: 32,
      },

      601: {
        items: 3,
        margin: 32,
      },

      1001: {
        items: 3,
        margin: 48,
      },
    },
  });
});

const videoBtn = document.querySelector("#video-btn");
const videoImg = document.querySelector(".video__img");
const videoWrapper = document.querySelector(".video");
const video = document.querySelector("#video-obj");

videoWrapper.addEventListener("click", function () {
  if (video.paused) {
    videoImg.classList.add("hidden");
    videoWrapper.classList.remove("video--overlay");
    videoBtn.classList.add("none");
    video.play();
  } else {
    videoImg.classList.remove("none");
    videoWrapper.classList.add("video--overlay");
    videoBtn.classList.remove("none");
    video.pause();
  }
});

const openNavBtn = document.querySelector("#openMobileNav");
const closeNavBtn = document.querySelector("#closeMobileNav");
const mobileNav = document.querySelector("#mobileNav");

openNavBtn.onclick = function () {
  mobileNav.classList.remove("none");
  document.body.classList.add("no-scroll");
};

closeNavBtn.onclick = function () {
  mobileNav.classList.add("none");
  document.body.classList.remove("no-scroll");
};
