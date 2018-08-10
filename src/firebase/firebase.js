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

// database.ref().once();

// database.ref().set({
//   name: 'viqa_vika',
//   isSingle: false,
//   age: 1,
//   location: {
//     country: 'Belarus',
//     city: 'Brest'
//   }
// }).then(() => {
//   console.log('data is saved');
// }).catch((e) => {
//   console.log(e);
// });

// // database.ref().set('this is my data');

// // database.ref('age').set('viqa');
// // database.ref('location/city').set('New York');

// database.ref('attributes').set({ height: 188, weight: 88 });

// database.ref('attributes').remove();