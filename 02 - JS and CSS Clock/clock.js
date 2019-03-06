function getHandfrom(time) {
    let TimeHand = {
        "hour" : document.querySelector(`.hour-hand`),
        "minute" : document.querySelector(`.min-hand`),
        "second" : document.querySelector(`.second-hand`)
    }
    return TimeHand[time]
}

function setDate() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const hoursDegrees = 90 + ((hours / 12) * 360);
    const minuteDegrees = 90 + ((minutes / 60) * 360);
    const secondsDegrees = 90 + ((seconds / 60) * 360);
    // console.log(hours + "시" + minutes + "분" + seconds + "초");

    getHandfrom('hour').style.transform = `rotate(${hoursDegrees}deg)`;
    getHandfrom('minute').style.transform = `rotate(${minuteDegrees}deg)`;
    getHandfrom('second').style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setDate, 1000);