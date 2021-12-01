const fivePercent = document.querySelector('.fivePercent')
const tenPercent = document.querySelector('.tenPercent')
const fifthPercent = document.querySelector('.fifthPercent')
const twoFivePercent = document.querySelector('.twoFivePercent')
const halfPercent = document.querySelector('.halfPercent')
const custom = document.querySelector('.customPercent')
const reset = document.querySelector('.reset')

fivePercent.addEventListener('click', function () {
    let tipPercentile = 0.05
    const peopleCount = document.querySelector('.peopleCount').value
    const bill = document.querySelector('.totalBill').value
    const tip = document.querySelector('.pricing').textContent =(bill * tipPercentile).toFixed(2)
    const billPerPerson = document.querySelector('.adjust').textContent = ((parseFloat(bill) + parseFloat(tip))/parseFloat(peopleCount)).toFixed(2)

})