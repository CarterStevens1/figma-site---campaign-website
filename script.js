"use strict";

const nav = document.querySelector(".nav-button");
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

nav.addEventListener("click", () => {
  document.querySelector(".dropdown").classList.toggle("active");
});

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
