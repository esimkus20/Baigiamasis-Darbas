var burger = document.getElementById("burger");
var links2 = document.getElementById("links2");

// Add an event listener to the burger icon
burger.addEventListener("click", function() {
  links2.classList.toggle("translate");
  this.classList.toggle("rotate");
});

// Add an event listener to each anchor tag inside links2
var anchorTags = links2.querySelectorAll("a");
anchorTags.forEach(function(anchor) {
  anchor.addEventListener("click", function() {
    // Remove the translate class when an anchor is clicked
    links2.classList.remove("translate");
    burger.classList.remove("rotate");
  });
});

// Add a window resize event listener
window.addEventListener("resize", function() {
  if (this.innerWidth > 768) {
    links2.classList.remove("translate");
    burger.classList.remove("rotate");
  }
});
