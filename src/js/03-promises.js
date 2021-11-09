const formEl = document.querySelector(".form")
const delayEl = document.querySelector('[name="delay"]')
const stepEl = document.querySelector('[name="step"]')
const amountEl = document.querySelector('[name="amount"]')
// const inputsEl = document.querySelectorAll('input')
// inputsEl.forEach(el => console.log(el.name))

formEl.addEventListener("submit", createPromise);
function createPromise(position, delay) {
for (var i = 0; i < amountEl.value.length; i+=1) {
  createPromise(position, delay);
  position += 1;
  delay = delayEl.value;
}
  
  
  return new Promise( (resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const step = stepEl.value;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(({position,delay}));
        // Fulfill
      } else {
        reject(({position,delay}));
        // Reject
      }
    }, delay + step);
  })
  
  
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });



