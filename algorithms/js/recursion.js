'use strict';

(() => {
    // const fibonacci = (num) => {
    //     console.log('invoked');
    //     if (num > 100) return false;
    //     num = fibonacci(num + 1);
    //     return num;
    // };
    //
    // fibonacci(1);

    const factorial = n => {
        if ( n === 1 ) {
            return 1;
        }
        console.log((n * (n -1)));

        return n * factorial(n - 1);
    };

    // const fibonacci = (n) => {
    //     // returns the number itself and the number before it
    //
    //     //base case
    //     if (n <= 2) return 1;
    //
    //     while (n < 100) {
    //         return n + fibonacci(n - 1);
    //     }
    // };

    const fibonacci = num =>  {
      if (num <= 1) return 1;
      // if (num >= 20) {
      //     console.log("catch a crash!");
      //     return false;
      // }

      // const guard = fibonacci(num - 1) + fibonacci(num -2);
      //
      // console.log(guard);
      //
      // if(guard > 1000) {
      //    return guard;
      // }

      // Way too expensive, use memoization
      // https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
      return fibonacci(num - 1) + fibonacci(num - 2);
    };


    document.addEventListener("DOMContentLoaded", (event) => {
        const resultDom = document.getElementById('result');
        // const result = factorial(10);
        const result = fibonacci(5);

        resultDom.append(result);
        // console.log(fibonacci(2));
    });
})();
