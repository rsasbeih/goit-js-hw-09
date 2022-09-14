function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;

startBtn.addEventListener("click", () => {
        timerId = setInterval(changeBodyColor, 1000);
});


stopBtn.addEventListener("click", () => {
        clearInterval(timerId);
});

function changeBodyColor() {
        document.body.style.backgroundColor = getRandomHexColor();
}