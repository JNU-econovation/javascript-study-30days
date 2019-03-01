function addKeyDownEvent(){
    window.addEventListener('keydown', playDrum);
}

function playDrum(e){
    hitDrum(e);
    changeView(e);
}

function hitDrum(e){
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio){
        return;
    }
    audio.currentTime = 0;
    audio.play();
}

function changeView(e){
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
}

function addTransitionEndEvent(){
    var keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend',removeTransition))
}

function removeTransition(e){
    if(e.propertyName !== 'transform'){
        return;
    } 
    this.classList.remove('playing');
}

function beCompile(){
    addKeyDownEvent();
    addTranEndEvent();
}