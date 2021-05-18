import firebase from 'firebase/app';
import 'firebase/auth';

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi2MQkJG8Vtd2XAV4nqVbsGDP9x746v-8",
  authDomain: "globe-coin.firebaseapp.com",
  projectId: "globe-coin",
  storageBucket: "globe-coin.appspot.com",
  messagingSenderId: "806494583144",
  appId: "1:806494583144:web:5c9daf0ebc15bec3afbedd",
  measurementId: "G-7VWJSME3XR"
};


  // Initialize Firebase app
firebase.initializeApp(firebaseConfig);
  
  // Export Auth + Google Login
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
console.log('firebase here->', firebase)