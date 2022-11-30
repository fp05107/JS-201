let counter =  0;
let id;
function start(){
    let images = JSON.parse(localStorage.getItem("images"));
    let container = document.getElementById("container");
    container.innerHTML = null;
    let img = document.createElement("img")
    img.src = images[counter];
    container.append(img);
    counter++;
    id = setInterval(function(){
        console.log(counter)
        if(counter==images.length){
            counter = 0;
        }
        img.src =  images[counter];
        container.append(img)
       
        counter++;
    },2000)
}

function pause(){
    clearInterval(id)
}