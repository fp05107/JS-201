//store the products array in localstorage as "products"
function createobj(t,d,p,i){
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
}
let prod_arr = JSON.parse(localStorage.getItem("products")) || [];
function products(event){
    // document.querySelector("input").innerText=""
    event.preventDefault();
    let form = document.querySelector("#products")
    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;
    
    let obj = new createobj(type,desc,price,image);
    prod_arr.push(obj)
    // console.log(prod_arr)
    localStorage.setItem("products",JSON.stringify(prod_arr))
}

document.querySelector("#show_products").addEventListener("click",function(){
    window.location.href = "inventory.html"
})