
const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const scale = (num, inMin, inMax, outMin, outMax) => {
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

const normalizeNumber = (number) => {
    return number.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
}

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hourElement.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
    minuteElement.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
    secondElement.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

    timeElement.innerHTML = `${normalizeNumber(hoursForClock)}:${normalizeNumber(minutes)}:${normalizeNumber(seconds)} ${ampm}`;
    dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

setTime();
setInterval(setTime, 1000);

