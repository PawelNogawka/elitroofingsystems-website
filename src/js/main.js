const header = document.querySelector(".header");
const burger = document.querySelector(".nav__hamburger");
const navLinks = document.querySelectorAll(".nav__link--mobile")

navLinks.forEach(link=>{
  link.addEventListener("click",function(){
    header.classList.remove("active")
  })
})
window.addEventListener("scroll", function () {
  if (window.scrollY == 0) {
    header.classList.remove("change");
  } else {
    header.classList.add("change");
  }
});

burger.addEventListener("click", function () {
  header.classList.toggle("active");
});





// slider


const slides = document.querySelectorAll(".slider__slide");
const controls = document.querySelectorAll(".slider__control");
let current = 1;
let interval;

function playSlider() {
  interval = setInterval(function () {
    current++;
    changeSlide();
  }, 5000);
}

function handleArrows(e) {
  clearInterval(interval);
  playSlider();
  let arrow = e.target.classList[1];

  if (arrow == "slider__control--left") {
    current--;
  } else {
    current++;
  }

  changeSlide();
}

function changeSlide() {
  checkCurrent();

  slides.forEach((slide, index) => {
    if (current == index + 1) {
      slide.style.cssText = "visibility:visible; opacity:1";
    } else {
      slide.style.cssText = "visibility:hidden; opacity:0";
    }
  });
}

function checkCurrent() {
  if (current == 0) {
    current = slides.length;
  } else if (current > slides.length) {
    current = 1;
  }
}

window.onload = playSlider();

controls.forEach((control) => control.addEventListener("click", handleArrows));




// popup


const images = document.querySelectorAll(".gallery__img");
const icons = document.querySelectorAll(".gallery__icon");
const close = document.querySelector(".gallery__close");

images.forEach((image) => {
  image.addEventListener("click", getSrc);
});

icons.forEach((icon) => {
  icon.addEventListener("click", getSrc);
});

function getSrc(e) {
  let img;
  if (e.target.classList.contains("gallery__img")) {
    img = e.target;
  } else {
    img = e.target.parentElement.firstElementChild;
  }

  let src = img.getAttribute("src");
  let alt = img.alt;

  showPopup(img, src, alt);
}

function showPopup(img, src, alt) {
  const popup = document.querySelector(".gallery__popup");
  popup.style.display = "block";
  close.addEventListener("click", function () {
    popup.style.display = "none";
  });
}
