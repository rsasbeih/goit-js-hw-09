import Notiflix from 'notiflix';


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
  });
  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

let inputDelay = document.querySelector(`input[name='delay']`);
let inputstep = document.querySelector(`input[name='step']`);
let inputAmount = document.querySelector(`input[name='amount']`);
let form = document.querySelector(".form");

form.addEventListener('submit', startPromiseCreation);

function startPromiseCreation(event) {
  event.preventDefault();
  let delay = Number(inputDelay.value);
  let step = Number(inputstep.value);
  let amount = Number(inputAmount.value);
  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, delay + i * step);
  }
}