let Register = async ()=>{
    let register_data = {
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        username:document.getElementById('username').value,
        password:document.getElementById('password').value,
        mobile:document.getElementById('mobile').value,
        description:document.getElementById('description').value
    };

    let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/register',{
        method:'POST',
        body:JSON.stringify(register_data),
        headers:{
            'Content-Type':'application/json',
        }
    })
    let data = await res.json();
    console.log(data);
}


let Login = async ()=>{
    let login_data = {
        username:document.getElementById('login_username').value,
        password:document.getElementById('login_password').value
    }

    let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/login',{
        method:"POST",
        body:JSON.stringify(login_data),
        headers:{
            'Content-Type':'application/json'
        }
    })
    let data = await res.json();
    getprofile(login_data.username,data.token)
    console.log(data);
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