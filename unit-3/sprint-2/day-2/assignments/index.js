let img = document.getElementById("img");


document.getElementById("pay").addEventListener("click", function () {
    function getData() {
        return true;
    }

    let myPromise = new Promise(function (resolve, reject) {

        let data = false;

        setTimeout(function () {

            data = getData();

            if (data) {
                resolve("Sweets")
            } else {
                reject("Chappal")
            }
        }, 300)
    });
    // console.log(myPromise);
    myPromise.then(function (res) {
        console.log(res);
        img.src = "https://c.tenor.com/wpSo-8CrXqUAAAAj/loading-loading-forever.gif"
    })
    myPromise.catch(function (err) {
        console.log(err);
    })
    let lastPromise = new Promise(function(resolve,reject){
        let data = false;
        setTimeout(function () {

            data = getData();

            if (data) {
                resolve("Sweets")
            } else {
                reject("Chappal")
            }
        }, 3000)
    })

    lastPromise.then(function (res) {
        console.log(res);
        img.src = "https://assets.materialup.com/uploads/9ba2d687-d7d3-4361-8aee-7b2a3c074761/preview.gif"
    })
    lastPromise.catch(function (err) {
        console.log(err);
    })
})

