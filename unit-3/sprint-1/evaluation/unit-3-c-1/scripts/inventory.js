let prod_arr = JSON.parse(localStorage.getItem("products")) || [];
prod_arr.forEach(function(elem,index){
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = elem.image;
        let price  = document.createElement("h3");
        price.innerText = elem.price;
        let desc = document.createElement("p");
        desc.innerText = elem.desc;;
        let type = document.createElement("h4");
        type.innerText = elem.type;
        let btn = document.createElement("button");
        // btn.setAttribute("id","btn")
        btn.innerText = "Remove"
        div.append(image,price,desc,type,btn);
        // btn.addEventListener("click",function(){
        //     // console.log(index)
        //     prod_arr.splice(index,1)
        // })
        document.querySelector("#all_products").append(div);
        // localStorage.setItem("products",JSON.stringify(prod_arr))
        
})


document.querySelector("#add_more_product").addEventListener("click",function(){
    window.location.href = "index.html"
})

// function remove(index){
//     prod_arr.splice(index,1);
//     console.log(index)
// }
// desc: "lnsdlkvkn"
// image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Yogesh_52e31f5560.jpg"
// price: "5000"
// type: "subham"