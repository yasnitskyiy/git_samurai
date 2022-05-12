import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./Redux/state"

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}
                 addMessage={store.addMessage.bind(store)}
                 addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}
                 updateMessageText={store.updateMessageText.bind(store)}
            />
        </React.StrictMode>
    );
}

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);

reportWebVitals();