
document.getElementById("confirm").addEventListener("click",function(){
    if(document.getElementById("name").value=="" || document.getElementById("number").value=="" ||
    document.getElementById("address").value==""){
        alert("please fill out all the details")
    }else{
       alert("Your order is accepted")
    }
})
