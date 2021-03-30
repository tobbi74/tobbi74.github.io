
  // Accepts any class name
  var rellax = new Rellax('.rellax');
  // Creating variables that reference to the images and the audio to be used with the images
  let kidImg = document.getElementById("kid");
  let kidAudio = document.getElementById("kidaudio");
  let introdiv = document.getElementById("introdiv");
  let introcass1 = document.getElementById("introcass1");
  let introsound = document.getElementById("introsound");
  let babyImg = document.getElementById("baby");
  let babyAudio = document.getElementById("babyaudio");
  let teenImg = document.getElementById("teen");
  let teenAudio = document.getElementById("teenaudio");
  let adultImg = document.getElementById("adult");
  let adultAudio = document.getElementById("adultaudio");
  let oldImg = document.getElementById("old");
  let oldAudio = document.getElementById("oldaudio");

  // As soon as the user scrolls on the website myFunction is executed
  window.onscroll = function() {myFunction()};

  function myFunction() {
    // Stores the number of pixels that have been scrolled on the page in variable winScroll
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    // Stores the total number of pixels on the webpage in the variable height
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // Stores the percentage of the website that has been scrolled in variable scrolled
    var scrolled = (winScroll / height) * 100;
    // Changes the css width of myBar by entering the scrolled value and adding a percentage, so the progress bar moves depending on where we are on the page
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  // Change the intro image as we click on Cass1.gif, then play the introduction audio
  introcass1.addEventListener('click', () => {
    introcass1.src = "Cass2.gif";
    introsound.play();
  })

  // When the introduction finishes pause the audio, re-start the audio and return the original image Cass1.gif
  introsound.addEventListener('timeupdate', () => {

    if(introsound.currentTime > 43) {
      introsound.pause();
      introsound.currentTime = 0;
      introcass1.src = "Cass1.gif";
    }
  })
  // Basic functionality to be able to pause and play the audio on each image
  kidImg.addEventListener('click', () => {
    if (kidAudio.paused == true ) {
        kidAudio.play();


    } else {
      kidAudio.pause();
    }
  })

  babyImg.addEventListener('click', () => {
    if (babyAudio.paused == true ) {
        babyAudio.play();


    } else {
      babyAudio.pause();
    }
  })

  teenImg.addEventListener('click', () => {
    if (teenAudio.paused == true ) {
        teenAudio.play();


    } else {
      teenAudio.pause();
    }
  })

  adultImg.addEventListener('click', () => {
    if (adultAudio.paused == true ) {
        adultAudio.play();


    } else {
      adultAudio.pause();
    }
  })

  oldImg.addEventListener('click', () => {
    if (oldAudio.paused == true ) {
        oldAudio.play();


    } else {
      oldAudio.pause();
    }
  })
