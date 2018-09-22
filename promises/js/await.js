const pinkyPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('Moe is on Beertation!');
        }, 500);
    });
};


const makeRequest = async() => {
    // console.log(await pinkyPromise());
    return "Success";
};

// Implicitly returns a promise with a value of the return
// So would be similar to

/*
    return new Promise((resolve, reject) => {
        resolve("Success");
    });
*/

const result = makeRequest();
console.log(result);
