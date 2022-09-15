// commonjs
const flatpickr = require("flatpickr");

// es modules are recommended, if available, especially for typescript
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;
let selectedDate = 0;
let timer = 0;
const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
                selectedDate = selectedDates[0].getTime();
                if (new Date() > selectedDate) {
                        Notiflix.Notify.failure('Please choose a date in the future');
                } else {
                        startBtn.disabled = false;
                }
        },
};

flatpickr(input, options);

startBtn.addEventListener("click", startCountdown);

function startCountdown() {
        startBtn.disabled = true;
        input.disabled = true;
        timer = setInterval(() => {
                let goalDate = selectedDate - new Date();
                if (goalDate <= 1000) {
                        clearInterval(timer);
                        Notiflix.Notify.success('Time is up!');
                        startBtn.disabled = false;
                        input.disabled = false;
                }
                const { days, hours, minutes, seconds } = convertMs(goalDate);
                document.querySelector('.value[data-days]').textContent = addLeadingZero(days);
                document.querySelector('.value[data-hours]').textContent = addLeadingZero(hours);
                document.querySelector('.value[data-minutes]').textContent = addLeadingZero(minutes);
                document.querySelector('.value[data-seconds]').textContent = addLeadingZero(seconds);
        }, 1000);

}

function convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // Remaining days
        const days = Math.floor(ms / day);
        // Remaining hours
        const hours = Math.floor((ms % day) / hour);
        // Remaining minutes
        const minutes = Math.floor(((ms % day) % hour) / minute);
        // Remaining seconds
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);

        return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
        return String(value).padStart(2, 0);
}