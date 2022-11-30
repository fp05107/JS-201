// let id;
// let container = document.getElementById("container")
// async function main() {
//     try {
//         let query = document.getElementById("query").value;
//         // console.log(query);
//         let res = await fetch(` http://www.omdbapi.com/?s=${query}&apikey=759b3a81`);
//         let data = await res.json();
//         console.log(data.Search);
//         if(data.Search != undefined){
//             appendMovies(data.Search)
//         }

//         // return data.Search;
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// let movies = document.getElementById("movies");
// function appendMovies(data){
//     movies.innerHTML = ''
//     data.forEach(function(el,index){
//         let div = document.createElement('div')
//         div.style.border='1px solid red'
//         let p = document.createElement("p");
//         p.innerText = el.Title;
//         div.append(p)
//         movies.append(div);
//         div.addEventListener("click",function(index){
//             container.innerHTML=''
//             let poster = document.createElement('img');
//             poster.src = el.Poster;
//             let title = document.createElement('p');
//             title.innerText = el.Title;
//             let year = document.createElement('p');
//             year.innerText = el.Year;
//             container.append(poster,title,year)
//         })
//     })
// }


// function debounce(func,delay){
//     if(id){
//         clearTimeout()
//     }

//     id = setTimeout(function(){
//         func();

//     },delay)
// }



// function x(){
//     let a = 9;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// let b = x();
// console.log(b);
// b()

function z(){
    let b = 4;
    function y(){
        let a = 23;
        function x(){
            console.log(a,b);
        }
        return x
    }
    return y
}
let g = z();
let f = g();
let h = f()
console.log(h);

