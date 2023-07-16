$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    dots: false,
    margin: 48,
    loop: true,
  });
});

const videoBtn = document.querySelector("#video-btn");
const videoImg = document.querySelector(".video__img");
const videoWrapper = document.querySelector(".video");
const video = document.querySelector("#video-obj");

videoWrapper.addEventListener("click", function () {
  if (video.paused) {
    videoImg.classList.add("none");
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
