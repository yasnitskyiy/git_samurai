import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {addMessage, addPost, subscribe, updateMessageText, updateNewPostText} from "./Redux/state"
import state from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addMessage={addMessage} addPost={addPost} updateNewPostText={updateNewPostText} updateMessageText={updateMessageText}/>
        </React.StrictMode>
    );
}
renderEntireTree(state);

subscribe(renderEntireTree);

reportWebVitals();