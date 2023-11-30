const hours   = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function setTime() {
    const now = new Date();
    const formatTime = (time) => (time < 10) ? `0${time}` : time;

    hours.innerText   = formatTime(now.getHours());
    minutes.innerText = formatTime(now.getMinutes());
    seconds.innerText = formatTime(now.getSeconds());
}

setTime();
window.setInterval(setTime, 1000);