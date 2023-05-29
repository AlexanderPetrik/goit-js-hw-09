import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  dateInput: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', startTimer);

function startTimer() {
  const selectedDate = new Date(refs.dateInput.value).getTime();
  const timerID = setInterval(() => {
    const currentDate = Date.now();
    if (currentDate >= selectedDate) {
      clearInterval(timerID);
      refs.days.textContent = 0;
      refs.hours.textContent = 0;
      refs.minutes.textContent = 0;
      refs.seconds.textContent = 0;
      return;
    }
    const elapsedTime = convertMs(selectedDate - currentDate);
    refs.days.textContent = addLeadingZero(elapsedTime.days);
    refs.hours.textContent = addLeadingZero(elapsedTime.hours);
    refs.minutes.textContent = addLeadingZero(elapsedTime.minutes);
    refs.seconds.textContent = addLeadingZero(elapsedTime.seconds);


  }, 1000);
};

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
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

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <=  new Date()) {
      alert('Please choose a date in the future');
      refs.startBtn.disabled = true;
      return;
    }
    refs.startBtn.disabled = false;
  },
};

flatpickr(refs.dateInput, options);