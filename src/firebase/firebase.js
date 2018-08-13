import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAmyn4sgiSvdAtI31H4tQrI4CznQJF1ddY",
  authDomain: "expensify-d2d8d.firebaseapp.com",
  databaseURL: "https://expensify-d2d8d.firebaseio.com",
  projectId: "expensify-d2d8d",
  storageBucket: "expensify-d2d8d.appspot.com",
  messagingSenderId: "270862135862"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };