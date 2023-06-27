var typed = new Typed("#autoTyped", {
  strings: ["software", "websites", "solutions"],
  startDelay: 1000,
  typeSpeed: 200,
  backSpeed: 150,
  backDelay: 1000,
  loop: true,
  // loopCount: 7,
  cursorChar: '|',
  shuffle: false,
})


function onTypingPaused() {
  if (typed.loop == true) {
    typed.loop = false
  } else {
  typed.loop = true
  typed.reset()
  }
}


