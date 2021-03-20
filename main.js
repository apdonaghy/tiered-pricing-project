let basePrice = document.getElementById('basePrice')
let tierDiff = document.getElementById('tierDiff')
const calculateBtn = document.getElementById('calculate')

let teirPrices = [];


function calculateDiff(tierVal){
       let price1 = document.getElementById('USD1')
       price1.innerText = basePrice.value
       let price2 = document.getElementById('USD2')
       price2.innerText = (basePrice.value - tierVal).toFixed(2);
       let price3 = document.getElementById('USD3')
       price3.innerText = (basePrice.value - (tierVal * 2)).toFixed(2); 
       let price4 = document.getElementById('USD4')
       price4.innerText = (basePrice.value - (tierVal * 3)).toFixed(2); 
}

const makeCalculation = function(price, tier){
    console.log(price.value)
    console.log(tier.value)
   
    calculateDiff(tier.value)
    
}

const triggerCalculationFunction = function(e){
    e.preventDefault()
    makeCalculation(basePrice, tierDiff)
}


calculateBtn.addEventListener('click', triggerCalculationFunction)



// https://api.exchangeratesapi.io/latest?base=USD