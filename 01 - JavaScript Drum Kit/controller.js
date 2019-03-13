const initialize = () => {
    bindEventListener();
}

const beatDrum = (event) => {
    playSound(event);
    addTransition(event);
}

const playSound = (event) => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"`)    
    
    if(!audio)
        return;
    
    audio.currentTime = 0;
    audio.play();
}

const addTransition = (event) => {
    const key = document.querySelector(`.key[data-key="${event.keyCode}"`)    
    key.classList.add('playing');
}

const removeTransition = function (event){
    if(event.propertyName !== 'transform')
        return;
        
    this.classList.remove('playing');
}

const bindEventListener = () => {
    window.addEventListener("keydown", beatDrum);
    
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}