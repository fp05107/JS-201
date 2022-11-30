function storeImage(){
    let url =  document.getElementById("url").value;
    let images = JSON.parse(localStorage.getItem("images")) || [];
    images.push(url);
    localStorage.setItem("images",JSON.stringify(images));
}

document.querySelector("#slider").addEventListener("click",function(){
    window.location.href = "slideshow.html"
})