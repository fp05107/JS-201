let id;
let container = document.getElementById("container")
async function main() {
    try {
        let query = document.getElementById("query").value;
        // console.log(query);
        let res = await fetch(` https://www.omdbapi.com/?s=${query}&apikey=759b3a81`);
        let data = await res.json();
        console.log(data.Search);
        if(data.Search != undefined){
            appendMovies(data.Search)
        }
        
        // return data.Search;
    }
    catch (err) {
        console.log(err);
    }
}
let movies = document.getElementById("movies");
function appendMovies(data){
    movies.innerHTML = ''
    data.forEach(function(el,index){
        let div = document.createElement('div')
        div.style.border='1px solid red'
        let p = document.createElement("p");
        p.innerText = el.Title;
        div.append(p)
        movies.append(div);
        div.addEventListener("click",function(index){
            container.innerHTML=''
            let poster = document.createElement('img');
            poster.src = el.Poster;
            let title = document.createElement('p');
            title.innerText = el.Title;
            let year = document.createElement('p');
            year.innerText = el.Year;
            container.append(poster,title,year)
        })
    })
}


function debounce(func,delay){
    if(id){
        clearTimeout()
    }
    
    id = setTimeout(function(){
        func();

    },delay)
}