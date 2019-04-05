function addKeydown(){
    window.addEventListener('keydown', playSound);
}
function playSound(e) { 
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`); 
    
    if (!audio) return; 
    audio.currentTime = 0;
    audio.play(); 
    remo
}
function stopSound(){
    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}
function remotePlaying(key){
    key.classList.add('playing'); 
}
function removeTransition(e) { 
    if (e.propertyName !== 'transform') return; 
    e.target.classList.remove('playing'); 
    stopSound();
}
function base(){
    stopSound();
    addKeydown();
}