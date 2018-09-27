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

    document.addEventListener("DOMContentLoaded", (event) => {
        const resultDom = document.getElementById('result');
        const result = factorial(10);
        resultDom.innerHTML = result;
    });
})();
