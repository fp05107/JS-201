// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let id;
let amount = JSON.parse(localStorage.getItem("amount"));
let wallet = document.getElementById('wallet');
wallet.innerText = amount;
let search = document.getElementById('search');
async function getData(){
    let res = await fetch(`https://www.omdbapi.com/?apikey=759b3a81&s=${search.value}`);
    let data = await res.json();
    // console.log(data)
    return data.Search;
    // appendData(data.Search)
}
async function main(){
    let data = await getData();
    appendData(data)
}
function debounce(func,delay){
    if(id){
        clearTimeout()
    }
    setTimeout(function(){
        func()
    },delay)
}
function appendData(data){
    document.getElementById('movies').innerHTML=null;
    data.forEach(function(element){
        let div = document.createElement('div');
        let image = document.createElement('img');
        image.src = element.Poster
        let title = document.createElement('p');
        title.innerText = element.Title;
        let btn = document.createElement('button')
        btn.innerText = 'book now'
        btn.addEventListener('click',function(){
            localStorage.setItem("movie",JSON.stringify(element));
            window.location.href = 'checkout.html'
        })
        div.append(image,title,btn)
        document.getElementById('movies').append(div)
    })
}

// Poster: "https://m.media-amazon.com/images/M/MV5BZTEyMTlmYTUtMDE0My00NWJmLWJlZmEtNzhjNGI0Mzk0NTA4XkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_SX300.jpg"
// Title: "Ek Tha Tiger"
// Type: "movie"
// Year: "2012"
// imdbID: "tt2016894"