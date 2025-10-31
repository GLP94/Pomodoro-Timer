let minutes = 25;
let seconds = 0;
let pauseShort = 5;
let pauseLong = 15;
let isPaused = true;
let timeInterval;
let counter = 1;

const timer = document.getElementById("timer");
const startTime = document.getElementById("startbtn");
const skipTime = document.getElementById("skipbtn");
const counterCont = document.getElementById("pomCounter");
const resetCont = document.getElementById("resetCounter");

function formatTime(m, s) {
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function updateTime() {
    timer.innerText = formatTime(minutes, seconds);

    if (minutes === 0 && seconds === 0) {
        clearInterval(timeInterval);
        return;
    }

    if (!isPaused) {
        if (seconds > 0) {
            seconds--;
        } else {
            seconds = 59;
            minutes--;
        }
    }
}

startTime.addEventListener("click", () => {

    if (!isPaused) {
        clearInterval(timeInterval);
        timeInterval = "";
        isPaused = true;
        startTime.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>`;
    } else {
        if (!timeInterval) {
            timeInterval = setInterval(updateTime, 1000);
            isPaused = false;
            startTime.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/></svg>`;
        }
    }

});

skipTime.addEventListener("click", () => {

    if (timeInterval){
        clearInterval(timeInterval);
        timeInterval = "";
        timer.innerText = "25:00";
        minutes = 25;
        seconds = 0;
        isPaused = true;
        counter++;
        counterCont.innerText = +counter;
        startTime.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>`;
    }

});

resetCont.addEventListener("click", () => {
    if (counter > 1) {
        let aff = confirm("Are you sure to reset your counter?");

        if (aff){
            counterCont.innerText = 1;
            counter = 1;
        }
    }
})