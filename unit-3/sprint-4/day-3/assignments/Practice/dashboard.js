const getData = async (page_number)=>{
    let res = await fetch(`http://localhost:3000/posts?_page=${page_number}&_limit=3`);
    let data = await res.json();
    console.log(data);
    appendData(data)
    
}
getData(1);
let container = document.getElementById('container')
function  appendData(data){
    container.innerHTML=""
    data.forEach(({ title })=>{
        let p = document.createElement('p');
        p.innerText = title;
        container.append(p)
    })
}


let showButtons = (results,per_page)=>{
    let buttons_div = document.getElementById('buttons_div');
    // let results = 11;
    // let per_page = 3;
    let buttons = Math.ceil(results/per_page);
    for(let i=1;i<=buttons;i++){
        let button = document.createElement('button');
        button.innerText = i;
        button.onclick=function(){
            getData(i)
            // pagination(i)
        }
        buttons_div.append(button)
    }
}
// showButtons()
showButtons(12,3)
const pagination = (x)=>{
    console.log(x);
}