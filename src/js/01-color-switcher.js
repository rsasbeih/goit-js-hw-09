function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
stopBtn.disabled = true;
let timerId = null;

startBtn.addEventListener("click", () => {
        timerId = setInterval(changeBodyColor, 1000);
        startBtn.disabled = true;
        stopBtn.disabled = false;
});


stopBtn.addEventListener("click", () => {
        clearInterval(timerId);
        startBtn.disabled = false;
        stopBtn.disabled = true;
});

function changeBodyColor() {
        document.body.style.backgroundColor = getRandomHexColor();
}