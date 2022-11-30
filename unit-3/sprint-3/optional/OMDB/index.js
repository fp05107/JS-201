let container = document.getElementById('container')
let data;



    async function getData() {
        // let res = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=759b3a81");
        let search = document.getElementById("search").value;
        try {
            let res = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=759b3a81`);
            // let res = await fetch(`https://www.omdbapi.com/?s=batman&apikey=759b3a81`);
            // console.log(res);
            data = await res.json();
            data = data.Search
            appendProducts(data)
            // console.log(data)
        }
        catch (err) {
            console.log(err);
        }
    
    }
    // getData()
    let arr = [];
    function appendProducts(data) {
        container.innerHTML = null;
        data.forEach(function (el) {
            let div = document.createElement('div')
            let img = document.createElement('img');
            img.src = el.Poster;
            let Title = document.createElement("p");
            Title.innerText = el.Title;
            let Type = document.createElement("p");
            Type.innerText = el.Type;
            let Year = document.createElement("p");
            Year.innerText = el.Year;
            let imdbid = document.createElement("p");
            imdbid.innerText = el.imdbID;
            let btn = document.createElement("button");
            btn.innerText = "BookmarkMovie";
            btn.addEventListener("click",function(){
                
                arr.push(el)
                localStorage.setItem("bookmark_data",JSON.stringify(arr));
                // window.location.href = 'bookmark.html'
            })
            div.append(img,Title,Type,Year,imdbid,btn);
            container.append(div)
        })
    }

document.getElementById('bookmark').addEventListener("click",()=>{
    window.location.href = 'bookmark.html'
})