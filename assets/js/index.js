import getWall from './layout/wall.js'
import getTopNav from './layout/topNav.js'

getTopNav('home')

getWall({
  title: "Chào mừng bạn đến với không gian nội thất hoàn hảo!",
  subContent: "Chào mừng bạn đến với không gian mua sắm nội thất đa dạng và đẳng cấp. Chúng tôi cung cấp những sản phẩm nội thất tinh tế và độc đáo, từ các bộ sưu tập cổ điển đến các thiết kế hiện đại, giúp bạn tạo ra không gian sống hoàn hảo theo phong cách riêng của mình. Hãy khám phá bộ sưu tập đa dạng của chúng tôi và biến ý tưởng trang trí của bạn thành hiện thực ngay hôm nay.",
})

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-slide", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-slide";
}

// ! next button
const nextButton = document.querySelector('.next')
if (nextButton) {
  nextButton.addEventListener('click', () => {
    plusSlides(1)
  })
}

// ! prev button
const prevButton = document.querySelector('.prev')
if (prevButton) {
  prevButton.addEventListener('click', () => {
    plusSlides(-1)
  })
}

//! dots 
const dots = document.querySelectorAll('.dot')
if (dots) {
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide(index + 1)
    })
  })
}

let slideIndexAuto = 0;
showSlidesAuto();

function showSlidesAuto() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexAuto++;
  if (slideIndexAuto > slides.length) {slideIndexAuto = 1}
  slides[slideIndexAuto-1].style.display = "block";
  setTimeout(showSlidesAuto, 3000); // Change image every 2 seconds
}