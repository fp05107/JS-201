// Store the wallet amount to your local storage with key "amount"
let amount = document.getElementById('amount');
let wallet = document.getElementById('wallet');
wallet.innerText = 0;
localStorage.setItem("amount",JSON.stringify(wallet.innerText))
let add_to_wallet = document.getElementById("add_to_wallet");
add_to_wallet.addEventListener("click",function(){
    wallet.innerText = Number(wallet.innerText)  + Number(amount.value);
    localStorage.setItem("amount",JSON.stringify(wallet.innerText))
})