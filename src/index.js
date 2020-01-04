import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import store from './store';
import { Provider } from 'react-redux';


// const myLogger = (store) => (next) => (action) => {
//     console.log("Logged Action", action);
//     next(action);       //important to enable the flow 
// }

// store.subscribe(() => {
//     console.log(store.getState())
// })

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));