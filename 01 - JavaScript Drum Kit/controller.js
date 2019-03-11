const initialize = () => {
    bindEventListener();
}

const beatDrum = (e) => {
    playSound(e);
    addTransition(e);
}

const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`)    
    
    if(!audio)
        return;
    
    audio.currentTime = 0;
    audio.play();
}

const addTransition = (e) => {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`)    
    key.classList.add('playing');
}

const removeTransition = function (e){
    if(e.propertyName !== 'transform')
        return;
        
    this.classList.remove('playing');
}

const bindEventListener = () => {
    window.addEventListener("keydown", beatDrum);
    
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}