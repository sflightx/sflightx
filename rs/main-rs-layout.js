var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-15rem";
  }
  prevScrollpos = currentScrollPos;

  // Change background if scroll is beyond 100vh
  if (currentScrollPos > window.innerHeight) {
    document.querySelector("header").style.backgroundColor = "rgba(0,0,0,1)";
  } else {
    document.querySelector("header").style.backgroundColor = "rgba(0,0,0,0)";
  }
}

var ul = document.getElementById("nav_list");

// Add an event listener to the ul
ul.addEventListener("click", function() {
  // When the ul is clicked, change its display to 'none'
  ul.style.display = "none";
});

var menu = document.getElementById("menu");

// Add an event listener to the ul
menu.addEventListener("click", function() {
  // When the ul is clicked, change its display to 'none'
  ul.style.display = "block";
});