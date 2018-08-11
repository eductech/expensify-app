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

database.ref().on('value', (snapshot) => {
  const data = snapshot.val();
  console.log(`${data.name} is ${data.age}`);
});

setTimeout(() => {
  database.ref().update({
    age: 15
  })
}, 3255);

// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot);
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log(e, 'error from fatching');
//   });

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