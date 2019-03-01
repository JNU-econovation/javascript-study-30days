function playSound(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	if(!audio) return; // stop the function from running all together
	audio.currentTime = 0; // rewind to the start
	audio.play();
	animateKey(e);
}

function animateKey(e){
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	key.classList.add('playing');
}

function removeTransition(e) {
	 if(e.propertyName != 'transform') return; // skip it if it's not a transform
	 this.classList.remove('playing');
}

function setDrumKit(){ // complie error, need to make a function for it
	window.addEventListener('keydown', playSound);
	addKeyEventListener();
}

function addKeyEventListener() {
	const keys = document.querySelectorAll('.key');
	keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}
