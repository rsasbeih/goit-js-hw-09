function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
stopBtn.disable = true;
let timerId = null;

startBtn.addEventListener("click", () => {
        timerId = setInterval(changeBodyColor, 1000);
        startBtn.disable = true;
        stopBtn.disable = false;
});


stopBtn.addEventListener("click", () => {
        clearInterval(timerId);
        startBtn.disable = false;
        stopBtn.disable = true;
});

function changeBodyColor() {
        document.body.style.backgroundColor = getRandomHexColor();
}