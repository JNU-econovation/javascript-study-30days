function getAudio(e) {
    return document.querySelector(`audio[data-key="${e.keyCode}"]`);
}
function getKey(e) {
    return document.querySelector(`.key[data-key="${e.keyCode}"]`);
}

function initiateDrum(){
    var keys = document.querySelectorAll('.key');
    window.addEventListener('keydown', playDrum);
    keys.forEach(key => key.addEventListener('transitionend', endTransition));
}

function playDrum(e){
    if(!getAudio(e)){
        return -1;
    }
    getKey(e).classList.add('playing');
    getAudio(e).currentTime = 0; // 재생 시간 처음으로 돌리기
    getAudio(e).play();
}

function endTransition(e){
    if(e.propertyName != 'transform') {
        return -1;
    } 
    this.classList.remove('playing');
}