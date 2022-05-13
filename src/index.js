import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./Redux/reduxStore"

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>
    );
}

renderEntireTree(store.getState());

store.subscribe(() => {
    renderEntireTree(store.getState());
});


reportWebVitals();