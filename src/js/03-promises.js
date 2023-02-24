import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const form = document.querySelector('.form');

const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

form.addEventListener('submit', createMyPromis);

function createMyPromis(event) {
  event.preventDefault()

let delay = Number(firstDelay.value);
const delayStepValue = Number(delayStep.value);
console.log(delayStepValue);
const amountValue = Number(amount.value);

for (let i = 0; i <= amountValue; i++) {
  createPromise(i,delay)
  .then(({positsin,delay})=> {
    Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${delay}ms`);
  })
  .catch(({position,delay}) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${delay}ms`);
  });
  delay += delayStepValue;
}
}



function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
