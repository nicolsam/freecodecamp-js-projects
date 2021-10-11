const counterValue = document.getElementById('counter-value');

const controlDecrease = document.getElementById('control-decrease');
const controlReset = document.getElementById('control-reset');
const controlIncrease = document.getElementById('control-increase');

var counter = 0;

updateCounterValue();

function updateCounterValue() {
    counterValue.innerHTML = counter;
}

controlDecrease.addEventListener('click', () => {
    counter--;
    updateCounterValue();
})

controlReset.addEventListener('click', () => {
    counter = 0;
    updateCounterValue();
})

controlIncrease.addEventListener('click', () => {
    counter++;
    updateCounterValue();
})