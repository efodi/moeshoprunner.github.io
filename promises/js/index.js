'use strict';

(function() {

  // Functions

  // returns 1 or 0 with floored input of 2
  let randInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  // Create Initial Promise
  let pinkyPromise = () => {

    return new Promise( (resolve, reject) => {
      // resolve and reject are built-in Javascript functions for the Promise
      // constructor
      console.log('Promise executor context, invoked immediately as new Promise is constructed');

      if(randInt(2) === 1) {
        // on success, invoke resolve with parameters as return to .then() chain
        setTimeout(() => resolve("done!"), 1000);
      } else {
        // on failure, invoke reject with parameters as return to .then() chain
        setTimeout(() => reject( Error("failed")), 1000) ;
      }
    });
  }

  // Create promise instance
  let moePromise = pinkyPromise();

  // Logging the promise will reveal following states
  console.log(moePromise);

  // Contains
  // 1. Pending
  // 2. Fulfilled
  // 3. Rejected

  // After promise, chain some then events to ensure order
  moePromise.then( (result) => {
    console.log('first then');
    console.log(moePromise);
    // Creates a new promise to be returned to the enclosing then() promise

    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        resolve('inner promise from first then, after 2 seconds')
      }, 10 * 1000);
    });

  }).then((result) => {

    console.log(`${result}`)
    console.log('second then')

  }).catch((error) => {
    
    console.log(error, ' was caught');
  });
})();
