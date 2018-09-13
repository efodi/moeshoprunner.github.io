(function() {
  let pinkyPromise = () => {

    return new Promise( (resolve, reject) => {
      console.log('hello');
      
      // successful call to api
      setTimeout(() => resolve("done!"), 1000);
    });

  }

  let moePromise = pinkyPromise();

  moePromise.then( () => {
    console.log('then promise');
  });

})();