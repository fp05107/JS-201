async function login(){
    let obj = {
        username:document.getElementById('username').value,
        password:document.getElementById('password').value
    }


    let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json',
        }

    });
    let data = await res.json()
    getprofile(obj.username,data.token)
}

let getprofile = async (username,token)=>{

    let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
        headers:{
            'Content-Type':'application/json',
             Authorization: `Bearer ${token}`
        },

    })
    let data = await res.json();
    console.log(data.name);
    alert(`welcome ${data.name}`)
    window.location.href = 'admin.html'
}