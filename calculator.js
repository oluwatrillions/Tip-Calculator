const fivePercent = document.querySelector('.fivePercent')
const tenPercent = document.querySelector('.tenPercent')
const fifthPercent = document.querySelector('.fifthPercent')
const twoFivePercent = document.querySelector('.twoFivePercent')
const halfPercent = document.querySelector('.halfPercent')
const custom = document.querySelector('.customPercent')
const reset = document.querySelector('.reset')
const people = document.querySelector('.people')
const span = document.querySelector('.span')



fivePercent.addEventListener('click', function () {
    let tipPercentile = 0.05
    const peopleCount = document.querySelector('.peopleCount').value
    const bill = document.querySelector('.totalBill').value
    const tip = document.querySelector('.pricing').textContent =(parseFloat(bill * tipPercentile)/parseFloat(peopleCount)).toFixed(2)
    const billPerPerson = document.querySelector('.adjust').textContent = ((parseFloat(bill) + parseFloat(tip)) / parseFloat(peopleCount)).toFixed(2);

    if (peopleCount > 0) {
        people.classList.add('success');
        span.classList.add('spanDex')
    } 
})

tenPercent.addEventListener('click', function () {
    let tipPercentile = 0.10
    const peopleCount = document.querySelector('.peopleCount').value
    const bill = document.querySelector('.totalBill').value
    const tip = document.querySelector('.pricing').textContent =(parseFloat(bill * tipPercentile)/parseFloat(peopleCount)).toFixed(2)
    const billPerPerson = document.querySelector('.adjust').textContent = ((parseFloat(bill) / parseFloat(peopleCount)) + parseFloat(tip)).toFixed(2)
    
    if (peopleCount > 0) {
        people.classList.add('success');
        span.classList.add('spanDex')
    } 
})

fifthPercent.addEventListener('click', function () {
    let tipPercentile = 0.15
    const peopleCount = document.querySelector('.peopleCount').value
    const bill = document.querySelector('.totalBill').value
    const tip = document.querySelector('.pricing').textContent =(parseFloat(bill * tipPercentile)/parseFloat(peopleCount)).toFixed(2)
    const billPerPerson = document.querySelector('.adjust').textContent = ((parseFloat(bill) / parseFloat(peopleCount)) + parseFloat(tip)).toFixed(2)
    
    if (peopleCount > 0) {
        people.classList.add('success');
        span.classList.add('spanDex')
    } 
})

twoFivePercent.addEventListener('click', function () {
    let tipPercentile = 0.25
    const peopleCount = document.querySelector('.peopleCount').value
    const bill = document.querySelector('.totalBill').value
    const tip = document.querySelector('.pricing').textContent =(parseFloat(bill * tipPercentile)/parseFloat(peopleCount)).toFixed(2)
    const billPerPerson = document.querySelector('.adjust').textContent = ((parseFloat(bill) / parseFloat(peopleCount)) + parseFloat(tip)).toFixed(2)
    
    if (peopleCount > 0) {
        people.classList.add('success');
        span.classList.add('spanDex')
    } 
})

halfPercent.addEventListener('click', function () {
    let tipPercentile = 0.50
    const peopleCount = document.querySelector('.peopleCount').value
    const bill = document.querySelector('.totalBill').value
    const tip = document.querySelector('.pricing').textContent =(parseFloat(bill * tipPercentile)/parseFloat(peopleCount)).toFixed(2)
    const billPerPerson = document.querySelector('.adjust').textContent = ((parseFloat(bill) / parseFloat(peopleCount)) + parseFloat(tip)).toFixed(2)
    
    if (peopleCount > 0) {
        people.classList.add('success');
        span.classList.add('spanDex')
    } 
})

function customPercentile() {
    let tipPercentile = (custom.value / 100).toFixed(2)
    const peopleCount = document.querySelector('.peopleCount').value
    const bill = document.querySelector('.totalBill').value
    const tip = document.querySelector('.pricing').textContent =(parseFloat(bill * tipPercentile)/parseFloat(peopleCount)).toFixed(2)
    const billPerPerson = document.querySelector('.adjust').textContent = ((parseFloat(bill) / parseFloat(peopleCount)) + parseFloat(tip)).toFixed(2)
    
    if (peopleCount > 0) {
        people.classList.add('success');
        span.classList.add('spanDex')
    } 
}

reset.addEventListener('click', function () {
    const tip = document.querySelector('.pricing').textContent = `$0.00`
    const billPerPerson = document.querySelector('.adjust').textContent = `$0.00`
    const bill = document.querySelector('.totalBill').value = 0
    const custom = document.querySelector('.customPercent').value = 'Custom'
    const peopleCount = document.querySelector('.peopleCount')
})
