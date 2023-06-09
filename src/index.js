import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import './fonts/SvBasicManual.ttf'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZr-87hJ3M-j0svyTk5and1C7swKND5nI",
  authDomain: "julianzip.firebaseapp.com",
  projectId: "julianzip",
  storageBucket: "julianzip.appspot.com",
  messagingSenderId: "1026793584334",
  appId: "1:1026793584334:web:cedc9a2fefb321306d029f",
  measurementId: "G-5ZD4PS3NHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
