import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';

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

window.store = store;

ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
