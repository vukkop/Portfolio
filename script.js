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


(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  var formEmail = {
    name: "",
    email: "",
    message: "",
  }

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        console.log("invalid");
      } else {
        formEmail.name = document.getElementById('name').value
        formEmail.email = document.getElementById('email').value
        formEmail.message = document.getElementById('message').value

        window.open(`mailto:koprivica.wolf@gmail.com
        ?subject=Portfolio Contact Form
        &body=Name: ${formEmail.name}
              Message: ${formEmail.message}
              Email: ${formEmail.email}`);

      }

      form.classList.add('was-validated')
    }, false)
  })
})()



// listening for sreen width change:

// var width;
//   // Insert values on load of page
//   window.onload = function() {
//       width = window.innerWidth;
//   };

//   // Change values when window is resized
//   window.onresize = function() {

//       // Setting the current height & width
//       // to the elements
//     width = window.innerWidth;
//     var container = document.getElementById("techContainer")
//     if (container && width < 517) {
//       container.remove()
//     }
//     console.log(width);
//   };
