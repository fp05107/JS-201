async function addpost(){
    let id = document.getElementById('id').value
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value

    let send_this_data = {
        id,
        title,
        author
    }
    let res = await fetch(`http://localhost:3000/posts`,{
        method:"POST",
        body:JSON.stringify(send_this_data),
        headers:{
            'Content-type':'application/json'
        }

    })
    let data = await res.json();
}
async function deleteid(){
    let id = document.getElementById('deleteid').value;
    let res = await fetch(`http://localhost:3000/posts/${id}`,{
        method:"DELETE",
        headers:{
            'Content-type':'application/json'
        }


    })
    let data = await res.json();
    console.log(data);
}
const updatePost = async ()=>{
    let id = document.getElementById('update_id').value;
    let title = document.getElementById('update_title').value;

    let send_data = {
        title
    }

    let res = await fetch(`http://localhost:3000/posts/${id}`,{
        method:"PATCH",
        body:JSON.stringify(send_data),
        headers:{
            'Content-Type':'application/json'
        }
    })
    let data = await res.json();
    console.log(data);
}

const replacePost = async ()=>{
    let id = document.getElementById('replace_id').value;
    let title = document.getElementById('replace_title').value;

    let send_data = {
        title
    }

    let res = await fetch(`http://localhost:3000/posts/${id}`,{
        method:"PUT",
        body:JSON.stringify(send_data),
        headers:{
            'Content-Type':'application/json'
        }
    })
    let data = await res.json();
    console.log(data);
}