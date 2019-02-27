window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    var clap = new Audio('sounds/clap.wav');
    var hihat = new Audio('sounds/hihat.wav');
    var kick = new Audio('sounds/kick.wav');
    var openhat = new Audio('sounds/openhat.wav');
    var boom = new Audio('sounds/boom.wav');
    var ride = new Audio('sounds/ride.wav');
    var snare = new Audio('sounds/snare.wav');
    var tom = new Audio('sounds/tom.wav');
    var tink = new Audio('sounds/tink.wav');
 
    if (key == 65) {
        clap.play();
    }
    else if (key == 83) {
        hihat.play();
    }
    else if (key == 68) {
        kick.play();
    }
    else if (key == 70) {
        openhat.play();
    }
    else if (key == 71) {
        boom.play(); 
    }
    else if (key == 72) {
        ride.play();
    }
    else if (key == 74) {
        snare.play();
    }
    else if (key == 75) {
        tom.play();
    }
    else if (key == 76) {
        tink.play();
    }
 }