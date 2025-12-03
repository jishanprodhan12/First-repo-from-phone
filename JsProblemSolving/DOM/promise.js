//syntex
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;   // change to false to test reject

        if (success) {
            resolve('Data fetched successfully!');
        } else {
            reject('Data fetch failed.');
        }
    }, 2000);
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));
