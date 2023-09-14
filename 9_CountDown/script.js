const day = document.getElementById('day')
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')

const launch = "12 july 2024"

function countDown() {
    const dateLaunch = new Date(launch)
    const today = new Date()

    const secTotal = (dateLaunch - today)/1000;

    const finalDays = Math.floor(secTotal / 60 / 60) / 24;
    const finalHours = Math.floor(secTotal / 60 / 60) % 24;
    const finalMinutes = Math.floor(secTotal / 60 ) % 60;
    const finalSeconds = Math.floor(secTotal) % 60;

    day.innerHTML = Math.floor(finalDays)
    hour.innerHTML = timeFormat(finalHours)
    minute.innerHTML = timeFormat(finalMinutes)
    second.innerHTML = timeFormat(finalSeconds)

}

function timeFormat(time) {
    return time < 10? `0${time}` : time;
}

countDown();
setInterval(countDown, 1000)