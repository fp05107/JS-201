// https://swapi.dev/api/people/?search=${query}
let id;
let container = document.getElementById('container');
async function getData() {
    let query = document.getElementById('input').value;
    let url = `https://swapi.dev/api/people/?search=${query}`;
    let res = await fetch(url);
    let data = await res.json();
    // appendData(data.results)
    // console.log(data.results)
    return data.results;
}

function appendData(data) {
    container.innerHTML = ''
    data.forEach(function (elem) {
        let name = document.createElement('p');
        name.innerText = elem.name;
        let gender = document.createElement('p');
        gender.innerText = elem.gender;
        container.append(name)
    })
}

async function main(){
    let data =await  getData();
    appendData(data)
}
function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(function(){
        func();
    },delay)
}
