"use strict";
const testimonials = document.querySelector(".testimonials");
const nav = document.querySelector(".nav-button");
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

nav.addEventListener("click", () => {
  document.querySelector(".dropdown").classList.toggle("active");
});
