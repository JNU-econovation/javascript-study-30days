function $(selector) {
    return document.querySelector(selector);
}

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360)+ 90;
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;

    $(".second-hand").style.transform = `rotate(${secondsDegrees}deg)`;
    $(".min-hand").style.transform = `rotate(${minutesDegrees}deg)`;
    $(".hour-hand").style.transform = `rotate(${hoursDegrees}deg)`;
}