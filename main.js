let basePrice = document.getElementById('basePrice')
let tierDiff = document.getElementById('tierDiff')
const calculateBtn = document.getElementById('calculate')
let tierPrices = [];


function runExchange(apidata){

    console.log(apidata['rates'])
    const landed = document.getElementById('SGD')

   
    if(landed.value === ''){
        // let noLanded = tierPrices[0]
        // let apiRate = parseFloat(noLanded * apidata['rates']['SGD']).toFixed(2)
        // console.log(apiRate)
           let sgdDOM = document.querySelectorAll('.SGD1')
           let item = 0;
       
   
            for(let tier of tierPrices){
                for(let singleSGD of sgdDOM){
                    item = tier 

                    singleSGD.innerText = item * parseFloat(apidata['rates']['SGD']).toFixed(2)
                   
               }
              
              
            }
         
     
           
            
   
 
    }else{
       let newlanded =  parseFloat(landed.value) + tierPrices[0]
       let apiRate = parseFloat(newlanded * apidata['rates']['SGD']).toFixed(2)
       console.log(apiRate)
    }

 

    // let usPrice = document.querySelectorAll('.USD1')
    // let value = parseFloat(basePrice.value);
    // for(let individualPrice of usPrice){
    //     value -= parseFloat(tierVal);
    //     tierPrices.push(parseFloat(value.toFixed(2)))
    //     individualPrice.innerText = value.toFixed(2);
    // }

}


function calculateDiff(tierVal) {

    tierPrices.push(parseFloat(basePrice.value))
    let usPriceOriginal = document.querySelector('.USD')
    usPriceOriginal.innerText = basePrice.value

    let usPrice = document.querySelectorAll('.USD1')
    let value = parseFloat(basePrice.value);
    for(let individualPrice of usPrice){
        value -= parseFloat(tierVal);
        tierPrices.push(parseFloat(value.toFixed(2)))
        individualPrice.innerText = value.toFixed(2);
    }
 
    console.log(tierPrices)

    
    fetch('https://api.exchangeratesapi.io/latest?base=USD')
    .then(response => response.json())
    .then(data =>  runExchange(data));

}

const makeCalculation = function (price, tier) {
    console.log(price.value)
    console.log(tier.value)

    calculateDiff(tier.value)

}

const triggerCalculationFunction = function (e) {
    e.preventDefault()
    makeCalculation(basePrice, tierDiff)
}


calculateBtn.addEventListener('click', triggerCalculationFunction)

