let userdata = JSON.parse(localStorage.getItem('user'));
document.getElementById('image').src = userdata.image;
document.getElementById('name').innerText = userdata.name;
document.getElementById('email').innerText = userdata.email;
document.getElementById('country').innerText = userdata.country


let data = JSON.parse(localStorage.getItem('news'));

 document.getElementById('news_img').src = data.urlToImage;
 document.querySelector('h3').innerText = data.title;
 document.querySelector('h4').innerText = data.description;
