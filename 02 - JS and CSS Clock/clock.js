const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    setSeconds();
    setMinutes();
    setHours();
  }
  
  function setSeconds() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  }
  
  function setMinutes() {
    const now = new Date();
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`
  }
  
  function setHours() {
    const now = new Date();
    const hour = now.getHours();
    const hourDegrees = ((hour / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }
  
  setInterval(setDate, 1000)