
const promise = new Promise ((resolve, reject) => {
  console.log('hi');
  setTimeout(() => {
    // resolve('this is my resolved data');
    reject('error');
  }, 3000);
});

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});