async function additems(){
    let obj = {
        image:document.getElementById('image').value,
        title:document.getElementById('title').value, 
        desc:document.getElementById('desc').value,
        price:document.getElementById('price').value,
        ratings:document.getElementById('ratings').value
    }

    let res = await fetch(`http://localhost:3000/posts`,{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
    })

    let data  = await res.json();
    console.log(data);
}