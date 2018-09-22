// RAND INT

// TODO: Extract
let randInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};


// Create Promise
const pinkyPromise = () => {
    return new Promise((resolve, reject) => {
        if(randInt(2) === 1) {
            setTimeout(() => {
                resolve('Moe is on Beertation!');
            }, 500);
        } else {
            setTimeout(() => {
                reject(Error('Request failed'));
            }, 500);
        }
    });
};

// Make Request and log
const makeRequest = async() => {
    try {
        const result = await pinkyPromise();
        console.log(result);
        // Pass to Promise
        // // Implicitly returns a promise with a value of the return
        return result;
    } catch (e) {
        console.log(e);
    }
};

makeRequest();
