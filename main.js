let basePrice = document.getElementById('basePrice')
let tierDiff = document.getElementById('tierDiff')
const calculateBtn = document.getElementById('calculate')
let tierPrices = [];
let countryCode = ['SGD', 'JPY', 'CNY', 'GBP']

function runExchange(apidata) {

    for (let abv of countryCode) {

        const landed = document.getElementById(abv)

        let sgdDOM = document.querySelectorAll(`.${abv}1`)

        let increment = 0;

        for (let singleDOM of sgdDOM) {
            if (landed.value === '') {
                singleDOM.innerText = parseFloat(tierPrices[increment] * apidata['rates'][abv]).toFixed(2)
                increment++

            } else {
                let newLanded = parseFloat(landed.value) + tierPrices[increment]
                singleDOM.innerText = `($${newLanded.toFixed(2)}) ${parseFloat(newLanded * apidata['rates'][abv]).toFixed(2)}`
                increment++
  
            }
        }
    }
}

function calculateDiff(tierVal) {

    tierPrices.push(parseFloat(basePrice.value))
    let usPriceOriginal = document.querySelector('.USD')
    usPriceOriginal.innerText = basePrice.value

    let usPrice = document.querySelectorAll('.USD1')
    let value = parseFloat(basePrice.value);
    for (let individualPrice of usPrice) {
        value -= parseFloat(tierVal);
        tierPrices.push(parseFloat(value))
        individualPrice.innerText = value.toFixed(2);
    }

    console.log(tierPrices)


    fetch('https://currencyapi.net/api/v1/rates?key=TNuW1JbyiSZ1UMy5pNFLLanDPYIod7csVNOv&base=USD')
        .then(response => response.json())
        .then(data => runExchange(data));

}

const makeCalculation = function (tier) {
   
    tierPrices = [];
    calculateDiff(tier.value)

}

const triggerCalculationFunction = function (e) {
    e.preventDefault()
    makeCalculation(tierDiff)
}

calculateBtn.addEventListener('click', triggerCalculationFunction)