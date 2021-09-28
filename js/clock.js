const today = document.querySelector("div#today");
const clock = document.querySelector("div#clock");

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function getDateClock() {
    const date = new Date();
    const year = String(date.getFullYear()).padStart(4, "0");
    const month = String(date.getMonth()+1).padStart(2, "0");
    const dates = String(date.getDate()).padStart(2, "0");
    const day = String(DAYS[date.getDay()]);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconde = String(date.getSeconds()).padStart(2, "0");
    today.innerText = `${year}-${month}-${dates}, ${day}`;
    clock.innerText = `${hours}:${minutes}:${seconde}`;
}

getDateClock();
setInterval(getDateClock, 1000);