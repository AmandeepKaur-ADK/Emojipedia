import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App'
import emojipedia from './emojipedia';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

var newEmojipedia = emojipedia.map(function(emojiterm){
  return emojiterm.meaning.substring(1, 100);
})

console.log(newEmojipedia);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
