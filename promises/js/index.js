(function() {

  // returns 1 or 0 with floored input of 2
  let randInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

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

  let moePromise = pinkyPromise();

  // Can't really log Promise, it is a promise, and must be .then() to actually view
  // its contents.

  // Contains
  // 1. Pending
  // 2. Fulfilled
  // 3. Rejected
  console.log(moePromise);


  moePromise.then( (result) => {
    
    console.log('first then');
    
    // Will run after subsquent then below
    // return setTimeout(() => {
    // console.log('Timeout from inner timeout')
    // });

    // No return, does it work?
    new Promise( (resolve, reject) => {
      setTimeout( () => {
        resolve('inner promise from first then, after 2 seconds')
      }, 2000);
    });
    
    // Creates a new promise, that is returns a promise that serves as a proxy until the inner executor, created by
    // the Promise

    // Must be returned to be passed to parameter of then
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        resolve('inner promise from first then, after 2 seconds')
      }, 2000);
    });
  }).then((result) => {

    console.log(`${result}`)
    console.log('second then')

  }).catch((error) => {
    console.log(error, ' was caught');
    return false;
  });
})();