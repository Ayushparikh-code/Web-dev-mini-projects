const curEl_one = document.getElementById('currency-one');
const amtEl_one = document.getElementById('amount-one');
const curEl_two = document.getElementById('currency-two');
const amtEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
    const currency_one = curEl_one.value;
    const currency_two = curEl_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.rates[currency_two];

        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

        amtEl_two.value = (amtEl_one.value * rate).toFixed(2);
    });
}

// Event listeners
curEl_one.addEventListener('change', calculate);
amtEl_one.addEventListener('input', calculate);
curEl_two.addEventListener('change', calculate);
amtEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () =>{
    const temp = curEl_one.value;
    curEl_one.value=curEl_two.value
    curEl_two.value=temp;
    calculate();
})

calculate();