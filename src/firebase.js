import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBtV1PJWcNJLJ2wP3NQ3pRF5lkHoISLbVI",
  authDomain: "ssk-deployments.firebaseapp.com",
  databaseURL: "https://ssk-deployments.firebaseio.com",
  projectId: "ssk-deployments",
  storageBucket: "ssk-deployments.appspot.com",
  messagingSenderId: "867491437630",
  appId: "1:867491437630:web:f1d1c121500306571b056f",
  measurementId: "G-CL3FLHF1BV"
};

firebase.initializeApp(firebaseconfig);
export default firebase;

export const database = firebase.database();