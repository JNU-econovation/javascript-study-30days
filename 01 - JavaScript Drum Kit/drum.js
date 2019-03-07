function getAudio(e) {
    return document.querySelector(`audio[data-key="${e.keyCode}"]`);
}
function getKey(e) {
    return document.querySelector(`.key[data-key="${e.keyCode}"]`);
}

function initiateDrum() {
    var keys = document.querySelectorAll('.key');
    window.addEventListener('keydown', playDrum);
    keys.forEach(key => key.addEventListener('transitionend', returnKeys));
}

function playDrum(e) {
    if(!getKey(e)) {
        return false;
    }
    getKey(e).classList.add('playing');
    playAudio(e);
}

function playAudio(e) {
    if(!getAudio(e)) {
        return false;
    }
    getAudio(e).currentTime = 0; // 재생 시간 처음으로 돌리기
    getAudio(e).play();
}

function returnKeys(e) {
    if(e.propertyName != 'transform') {
        return false;
    }
    console.log(this);
    this.classList.remove('playing');
}