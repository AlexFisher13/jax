import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);











// const list = document.querySelector(".list");
// const trackInput = document.querySelector(".trackInput");
//
// store.subscribe(() => {
//     list.innerHTML = '';
//     trackInput.value = '';
//     store.getState().forEach(track => {
//         const li = document.createElement('li');
//         li.textContent = track;
//         list.appendChild(li);
//     })
// });
//
// const addTrack = document.querySelector(".addTrack");
// addTrack.addEventListener('click', () => {
//     store.dispatch({type: 'ADD_TRACK', payload: trackInput.value});
// });