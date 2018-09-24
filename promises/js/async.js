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

        if (result) {
            console.log(result);
        }
        // Implicitly returns a promise
    } catch (e) {
        console.log(e);
    }
};

makeRequest();
