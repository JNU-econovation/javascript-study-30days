function addKeyDownEvent(){
    window.addEventListener('keydown', bang);
}

function bang(e){
    bangDrum(e);
    bangView(e);
}

function bangDrum(e){
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio){
        return;
    }
    audio.currentTime = 0;
    audio.play();
}

function bangView(e){
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
}

function addTranEndEvent(){
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