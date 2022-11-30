let userdata = JSON.parse(localStorage.getItem('user'));
document.getElementById('image').src = userdata.image;
document.getElementById('name').innerText = userdata.name;
document.getElementById('email').innerText = userdata.email;
document.getElementById('country').innerText = userdata.country

let countrycode = document.getElementById('country').innerText;
let news = async (countrycode)=>{
    let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${countrycode}`)
    let data = await res.json();
    // console.log(data);
    appendData(data.articles)
}
news(countrycode)
let news_container = document.getElementById('news_container');
function appendData(data){
    news_container.innerHTML = ''
    data.forEach(function(el){
        let div = document.createElement('div');
        let image = document.createElement('img');
        image.src = el.urlToImage;
        let title = document.createElement('p');
        title.innerText = el.title
        let author = document.createElement('p');
        author.innerText = el.author;
        div.append(image,title,author);
        div.addEventListener('click',function(){
            localStorage.setItem('news',JSON.stringify(el))
            window.location.href =  'news.html'
            
        })
        news_container.append(div)
    })
}


let india = document.getElementById('in').addEventListener('click',function(){
    news('in')
})
let usa = document.getElementById('us').addEventListener('click',function(){
    news('us')
})
let china = document.getElementById('ch').addEventListener('click',function(){
    news('ch')
})
let uk = document.getElementById('uk').addEventListener('click',function(){
    news('uk')
})
let NewZealand = document.getElementById('nz').addEventListener('click',function(){
    news('nz')
})




let searchdata = async (event)=>{
    event.preventDefault()
    let search = document.getElementById('search').value;
    let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news?q=${search}`);
    let data = await res.json();
    console.log(data);
    appendsearch(data.articles)
}


function appendsearch(data){

    news_container.innerHTML = '';
    data.forEach(function(el){
        let div = document.createElement('div');
        let image = document.createElement('img');
        image.src = el.urlToImage;
        let title = document.createElement('p');
        title.innerText = el.title
        let author = document.createElement('p');
        author.innerText = el.author;
        div.append(image,title,author);
        div.addEventListener('click',function(){
            localStorage.setItem('news',JSON.stringify(el))
            window.location.href =  'news.html'
            
        })
        news_container.append(div)
    })
}