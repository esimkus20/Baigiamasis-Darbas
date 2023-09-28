// AOS Animations
AOS.init();

// code for section-2 sounds
const sound1 = document.getElementById("sound-1")
const sound2 = document.getElementById("sound-2")
const sound3 = document.getElementById("sound-3")
const customSound1 = new Audio("../app/sounds/sound-1.mp3")
const customSound2 = new Audio("../app/sounds/sound-2.mp3")
const customSound3 = new Audio("../app/sounds/sound-3.mp3")

sound1.addEventListener("click", function() {
  customSound1.play()
})

sound2.addEventListener("click", function() {
  customSound2.play()
})

sound3.addEventListener("click", function() {
  customSound3.play()
})
