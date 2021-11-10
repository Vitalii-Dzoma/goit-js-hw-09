import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const btnStart = document.querySelector("[data-start]")
const fieldDays = document.querySelector("[data-days]")
const fieldHours = document.querySelector("[data-hours]")
const fieldMinutes = document.querySelector("[data-minutes]")
const fieldSeconds = document.querySelector("[data-seconds]")
let deltaTime;

const startTime = Date.now();
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0].getTime());
   

    const currentTime = Date.now()
    
if (selectedDates[0].getTime() < currentTime) {
    btnStart.setAttribute('disabled', true)
    window.alert("Please choose a date in the future")
    
} else {
    btnStart.removeAttribute('disabled')
    }
    deltaTime = selectedDates[0].getTime() - currentTime;
      console.log(convertMs(deltaTime))
      
    },
  
};

function finalCountDown() {
    
    this.intervalId = setInterval(() => {
        const currentTime = Date.now()
        const lowTime = currentTime - startTime;
    if (lowTime) {
        deltaTime -= 1000;
        console.log(convertMs(deltaTime))
    }
    if(deltaTime < 1000) {
        clearInterval(this.intervalId)
        btnStart.removeAttribute('disabled')
    }
}, 1000)
}


function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}


btnStart.addEventListener("click", finalCountDown)



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    fieldDays.textContent = days;
    fieldHours.textContent = hours;
    fieldMinutes.textContent = minutes;
    fieldSeconds.textContent = seconds;
  return { days, hours, minutes, seconds };
}





    flatpickr('input[type="text"]', options);