

let img = document.getElementById("img");
function getData(){
    return true;
}

let myPromise = new Promise(function(resolve,reject){

    let data = false;

    setTimeout(function(){

        data = getData();
    
        if(data){
            resolve("Sweets")
        }else{
            reject("Chappal")
        }
    },3000)
});

// console.log(myPromise);
myPromise.then(function(res){
    console.log(res);
    img.src = "https://i.giphy.com/media/Q81NcsY6YxK7jxnr4v/200w.webp"
})
myPromise.catch(function(err){
    console.log(err);
})