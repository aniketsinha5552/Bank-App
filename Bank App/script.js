let deposit = document.getElementById("deposit")
let withdraw = document.getElementById("withdraw")
let balance = document.getElementById("balance")
let amt = Number(balance.innerText)




deposit.onclick=()=>{
   let input = document.getElementById("input").value
   amt = amt+ Number(input)
   balance.innerText = `${amt}`
   document.getElementById("input").value = null
}

withdraw.onclick=()=>{
    let input = document.getElementById("input").value
    if(amt>= Number(input)){
        amt = amt- Number(input)
        balance.innerText = `${amt}`
        document.getElementById("input").value = null
        
    }
    else{
        alert("Insufficent Account Balance")
    }
    input= null
    
    
}