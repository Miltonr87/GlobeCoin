import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi2MQkJG8Vtd2XAV4nqVbsGDP9x746v-8",
  authDomain: "globe-coin.firebaseapp.com",
  projectId: "globe-coin",
  storageBucket: "globe-coin.appspot.com",
  messagingSenderId: "806494583144",
  appId: "1:806494583144:web:5c9daf0ebc15bec3afbedd",
  measurementId: "G-7VWJSME3XR"
};

firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
