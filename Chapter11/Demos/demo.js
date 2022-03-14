setTimeout(() => {
    console.log('BlaBleuBlee')
}, 20);

new Promise((_, reject) => reject(new Error("Fail")))
    .then(value => "Handler 1")
    .then(value => console.log("Handler 2", value))
    .catch(reason => {
        console.log("Caught failure " + reason.message);
        return "nothing";
    })