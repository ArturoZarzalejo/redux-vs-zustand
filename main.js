import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
// import store from './zustand'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button">Aumentar Contador</button>
    </div>
    <div class="card">
      <button id="counter3" type="button"></button>
      <span id="counterZustandState"></span>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`


const element = document.querySelector('#counter')

// element.addEventListener('click', () => {

//   store.getState().increment()

// })

// const handleChange = (newState) => {
//   console.log('State changed:', newState);
//   document.querySelector('#counterZustandState').textContent = newState.count
// };

// // Subscribe to state changes
// const unsubscribe = store.subscribe(handleChange);



// Importar Redux
import { createStore } from 'redux';

// Acción para incrementar el contador
const incrementAction = () => {
  return {
    type: 'INCREMENT'
  };
};

// Acción para decrementar el contador
const decrementAction = () => {
  return {
    type: 'DECREMENT'
  };
};

// Reductor que actualiza el estado del contador
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// Crear el store con el reductor
const store = createStore(counterReducer);

// Obtener el estado actual del contador
console.log(store.getState()); // Salida: 0

// Suscribirse a los cambios del estado
store.subscribe(() => {
  console.log('Estado actualizado:', store.getState());
  document.querySelector('#counterZustandState').textContent = store.getState()
});

// Despachar acciones para actualizar el contador
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(decrementAction());

element.addEventListener('click', () => {

  store.dispatch(incrementAction());

})