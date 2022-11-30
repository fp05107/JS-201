let counter =  0;
let id;
function start(){
    let time = document.getElementById("time").value;
    time = time*1000
    let images = JSON.parse(localStorage.getItem("images"));
    let container = document.getElementById("container");
    container.innerHTML = null;
    let img = document.createElement("img")
    img.src = images[counter];
    container.append(img);
    counter++;
    id = setInterval(function(){
        // console.log(counter)
        if(counter==images.length){
            counter = 0;
        }
        img.src =  images[counter];
        container.append(img)
       
        counter++;
    },time)
}

function pause(){
    clearInterval(id)
}