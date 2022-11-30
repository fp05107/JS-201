let menu = document.getElementById('menu')
async function getData() {
    let res = await fetch('https://masai-api.herokuapp.com/coffee/menu');
    let Data = await res.json();
    appendData(Data.menu.data)
    console.log(Data.menu.data);
}
getData()

function appendData(data) {
        menu.innerHTML=''
        data.forEach(function (elem) {
            let div = document.createElement("div");
            let image = document.createElement('img');
            image.src = elem.image;
            let desc = document.createElement("p");
            desc.innerText = elem.description;
            let price = document.createElement("p");
            price.innerText = elem.price;
            let btn = document.createElement('button');
            btn.innerText = "Add to Bucket"
            btn.style.color = 'red'
            btn.addEventListener("click", function () {
                let arr = JSON.parse(localStorage.getItem("coffee")) || []
                arr.push(elem)
                localStorage.setItem("coffee", JSON.stringify(arr))
                async function getData() {
                    let res = await fetch('https://masai-api.herokuapp.com/coffee/menu');
                    let Data = await res.json();
                    appendData(Data.menu.data)
                    console.log(Data.menu.data);
                }
                getData()
            })
            div.append(image, desc, price, btn)
            menu.append(div)
        })
        let arr = JSON.parse(localStorage.getItem("coffee")) || [];
        document.getElementById("coffee_count").innerText = arr.length;
    }



document.getElementById('bucket').addEventListener("click", function () {
    window.location.href = 'bucket.html'
})
