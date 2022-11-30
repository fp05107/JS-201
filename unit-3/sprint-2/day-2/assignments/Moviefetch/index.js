let container = document.getElementById('container')
let data;
let search = document.getElementById("search").innerText;


    async function getData() {
        // let res = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=759b3a81");
        try {
            let res = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=759b3a81`);
            // let res = await fetch(`https://www.omdbapi.com/?s=batman&apikey=759b3a81`);
            // console.log(res);
            data = await res.json();
            data = data.Search
            appendProducts(data)
            console.log(data)
        }
        catch (err) {
            console.log(err);
        }
    
    }
    getData()
    
    function appendProducts(data) {
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
            div.append(img,Title,Type,Year,imdbid);
            container.append(div)
        })
    }


