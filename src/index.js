import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let dialogs = [
    {id: 1, name: "Vlad"},
    {id: 2, name: "Oleg"},
    {id: 3, name: "Polina"},
    {id: 4, name: "Ilona"},
]

let messages = [
    {id: 1, name: "Hello world"},
    {id: 2, name: "React cool, how about continue work a bit harder?!"},
    {id: 3, name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            " Accusamus amet animi aperiam dignissimos distinctio fuga impedit" +
            " itaque, nemo odit officiis placeat quia ratione reiciendis saepe" +
            " sunt ullam ut voluptas voluptatem?"},
]

root.render(
  <React.StrictMode>
    <App dialogsData={dialogs} messagesData={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// second check