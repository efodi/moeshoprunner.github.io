const pinkyPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Moe is on Beertation!')
        }, 2000);
    });
};


const makeRequest = async = () => {
    await pinkyPromise();
    return "Success";
};

makeRequest();
