function startDrum(){
    keyDownEvent();
    keyStopEvent();
  }
  
  function keyDownEvent(){
    window.addEventListener('keydown', playAudio);
    window.addEventListener('keydown', playKey);
  }

  function keyStopEvent(){
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitioned', removeTransition))
  }

  function playAudio(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
  }

  function playKey(e) {
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
  }

  function removeTransition(e) {
    if(e.propertyName !== 'transform') return; 
    this.classList.remove('playing');
  }
