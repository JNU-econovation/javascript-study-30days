var secondHand;
var minHand;
var hourHand;

const init = () => {
    secondHand = document.querySelector('.second-hand');
    minHand = document.querySelector('.min-hand');
    hourHand = document.querySelector('.hour-hand');
    
    setInterval(setDate, 1000);
}

const setDate = () => {
    const now = new Date();
    
    setSeconds(now.getSeconds());
    setMins(now.getMinutes());
    setHours(now.getHours());
}

const setSeconds = (seconds) => {
    const secondsDegress = ((seconds / 60)) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegress}deg)`;
}

const setMins = (mins) => {
    const minsDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
}

const setHours = (hour) => {
    const hoursDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}