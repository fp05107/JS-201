// fetch("https://fakestoreapi.com/products")
// .then(function(res){
//     // console.log(res.json());
//     return res.json()
// })
// .then(function(res){
//     console.log(res);
// })

// .catch(function(err){
//     console.log('err');
// })

async function getData() {

    try {
        let res = await fetch('https://fakestoreapi.com/products');
        let data = await res.json();
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }

}

getData()