import Notiflix from 'notiflix';
const formEl = document.querySelector(".form")

formEl.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  let [delay, step, amount] = event.currentTarget.elements;
  delay = Number(delay.value);
  step = Number(step.value);
  amount = Number(amount.value);
  for (let position = 1; position <= amount; position++) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
         Notiflix.Notify.success( `✅ Fulfilled promise ${position} in ${delay}ms`);
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.failure( `❌ Rejected promise ${position} in ${delay}ms`);
        }, delay);
      });
    delay += step;
  }
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}

// const delayEl = document.querySelector('[name="delay"]')
// const stepEl = document.querySelector('[name="step"]')
// const amountEl = document.querySelector('[name="amount"]')
// // const inputsEl = document.querySelectorAll('input')
// // inputsEl.forEach(el => console.log(el.name))

// formEl.addEventListener("submit", createPromise);

// function createPromise(position, delay) {

//   position += 1;
//   delay = delayEl.value;
//   const step = delay + stepEl.value;

  
  
//   return new Promise( (resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
    
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({position,delay});
//         // Fulfill
//       } else {
//         reject({position,delay});
//         // Reject
//       }
//       delay += step;
//     }, delay);
//   })
  
  
// }
// for (var i = 0; i < amountEl.value; i += 1) {
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
//   }

// // const amount = document.querySelector('input[name="amount"]').value
// // let delay = document.querySelector('input[name="delay"]').value
// // const step = document.querySelector('input[name="step"]').value

// // function createPromise(position, delay) {
// //   const shouldResolve = Math.random() > 0.3;

// //   return new Promise(function(resolve, reject) {
// //     if (shouldResolve) {
// //       resolve(`Fulfilled promise ${position} in ${delay}ms`)
// //     } else {
// //       reject(`Rejected promise ${position} in ${delay}ms`)
// //     }
// //   })
// // }

// // document.querySelector('.form').addEventListener('submit', function(e) {
// //   e.preventDefault()

// //   for (let i = 0; i < amount; i++) {
// //     setTimeout(() => {
// //       console.log(createPromise(i, delay))
// //       delay += step
// //     }, delay);
// //   }

// // })


