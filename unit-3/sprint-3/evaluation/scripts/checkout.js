// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let walletamount = JSON.parse(localStorage.getItem("amount"))
let wallet = document.getElementById('wallet');
wallet.innerText = walletamount;
let movie = JSON.parse(localStorage.getItem("movie"));
function appendData(data){
    let div = document.getElementById('movie');
    let image = document.createElement('img');
    image.src = data.Poster;
    let title = document.createElement("p");
    title.innerText = data.Title;
    div.append(image,title)
}
appendData(movie)

let username = document.getElementById('user_name');
let numberofseats = document.getElementById('number_of_seats');
document.getElementById('confirm').addEventListener("click",function(){
    if(username.value=="" || numberofseats.value==""){
        alert("Please fill out all the details")
    }
    else if(numberofseats.value*100>walletamount){
        alert('Insufficient Balance !')
    }else if(numberofseats.value*100<=walletamount){
        alert('Booking Successful!');
        let x  = walletamount - numberofseats.value*100;
        console.log(x)
        wallet.innerText = x;
        localStorage.setItem('amount',JSON.stringify(wallet.innerText));
    }
})
