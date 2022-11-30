let arr = JSON.parse(localStorage.getItem("coffee")) || [];
console.log(arr);
let bucket = document.getElementById("bucket")
// display(arr)




function appendData(data) {
    bucket.innerHTML = ''
    data.forEach(function (elem, index) {
        let div = document.createElement("div");
        let image = document.createElement('img');
        image.src = elem.image;
        let desc = document.createElement("p");
        desc.innerText = elem.description;
        let price = document.createElement("p");
        price.innerText = elem.price;
        let btn = document.createElement('button');
        btn.innerText = "Remove from Bucket"
        btn.style.color = 'red'
        btn.addEventListener("click", function (index) {
            arr.splice(index, 1);
            localStorage.setItem("coffee", JSON.stringify(arr))
            appendData(arr)
        })
        div.append(image, desc, price, btn)
        bucket.append(div)
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total = total + arr[i].price
        }
        document.getElementById("total_amount").innerText = total;
    })
}

appendData(arr)

document.getElementById("confirm_checkout").addEventListener("click",function(){
    window.location.href="checkout.html"
})