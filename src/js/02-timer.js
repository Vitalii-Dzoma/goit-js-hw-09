import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const btnStart = document.querySelector("[data-start]")
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0].getTime());
   
setTimeout(() => {
    const currentTime = Date.now()
if (selectedDates[0].getTime() < currentTime) {
    btnStart.setAttribute('disabled', true)
    window.alert("Please choose a date in the future")
    
} else {
    btnStart.removeAttribute('disabled')
    }
    
}, 0)
  },
};


btnStart.addEventListener("click", finalCountdown)

function finalCountdown() {
    
}







    flatpickr('input[type="text"]', options);