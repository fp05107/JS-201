// localStorage.setItem("you_video",JSON.stringify(x));
let data = JSON.parse(localStorage.getItem("you_video"));
console.log(data);
let container = document.getElementById('container')
function appenddata() {
    let x = data.xvideo;
    let iframe = document.createElement('iframe')
    iframe.src = `https://www.youtube.com/embed/${x}`
    iframe.width = '30%';
    iframe.height = '30%';
    iframe.allow = 'fullscreen'
    container.append(iframe)
}
appenddata()