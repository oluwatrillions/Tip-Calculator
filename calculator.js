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
    const tip = document.querySelector('.pricing').textContent =(parseFloat(bill * tipPercentile)/parseFloat(peopleCount)).toFixed(2)
    const billPerPerson = document.querySelector('.adjust').textContent = ((parseFloat(bill) + parseFloat(tip))/parseFloat(peopleCount)).toFixed(2)
})

tenPercent.addEventListener('click', function () {
    let tipPercentile = 0.10
    const peopleCount = document.querySelector('.peopleCount').value
    const bill = document.querySelector('.totalBill').value
    const tip = document.querySelector('.pricing').textContent =(parseFloat(bill * tipPercentile)/parseFloat(peopleCount)).toFixed(2)
    const billPerPerson = document.querySelector('.adjust').textContent = ((parseFloat(bill) + parseFloat(tip))/parseFloat(peopleCount)).toFixed(2)
})

fifthPercent.addEventListener('click', function () {
    let tipPercentile = 0.15
    const peopleCount = document.querySelector('.peopleCount').value
    const bill = document.querySelector('.totalBill').value
    const tip = document.querySelector('.pricing').textContent =(parseFloat(bill * tipPercentile)/parseFloat(peopleCount)).toFixed(2)
    const billPerPerson = document.querySelector('.adjust').textContent = ((parseFloat(bill) + parseFloat(tip))/parseFloat(peopleCount)).toFixed(2)
})

twoFivePercent.addEventListener('click', function () {
    let tipPercentile = 0.25
    const peopleCount = document.querySelector('.peopleCount').value
    const bill = document.querySelector('.totalBill').value
    const tip = document.querySelector('.pricing').textContent =(parseFloat(bill * tipPercentile)/parseFloat(peopleCount)).toFixed(2)
    const billPerPerson = document.querySelector('.adjust').textContent = ((parseFloat(bill) + parseFloat(tip))/parseFloat(peopleCount)).toFixed(2)
})

halfPercent.addEventListener('click', function () {
    let tipPercentile = 0.50
    const peopleCount = document.querySelector('.peopleCount').value
    const bill = document.querySelector('.totalBill').value
    const tip = document.querySelector('.pricing').textContent =(parseFloat(bill * tipPercentile)/parseFloat(peopleCount)).toFixed(2)
    const billPerPerson = document.querySelector('.adjust').textContent = ((parseFloat(bill) + parseFloat(tip))/parseFloat(peopleCount)).toFixed(2)
})

custom.addEventListener('oninput', function (e) {
    let tipPercentile = parseFloat( / 100).toFixed(2)
    const peopleCount = document.querySelector('.peopleCount').value
    const bill = document.querySelector('.totalBill').value
    const tip = document.querySelector('.priicng').textContent =(parseFloat(bill * tipPercentile)/parseFloat(peopleCount)).toFixed(2)
    const billPerPerson = document.querySelector('.adjust').textContent = ((parseFloat(bill) + parseFloat(tip))/parseFloat(peopleCount)).toFixed(2)
})

reset.addEventListener('click', function () {
    const tip = document.querySelector('.pricing').textContent = `$0.00`
    const billPerPerson = document.querySelector('.adjust').textContent = `$0.00`
})