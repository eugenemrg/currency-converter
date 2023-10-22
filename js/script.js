baseCurrencyCodeSelector = document.getElementById('base-currencies')
targetCurrencyCodeSelector = document.getElementById('target-currencies')
currencyAmountInput = document.getElementById('amount')
convertedAmountSection = document.getElementById('converted')

document.addEventListener('DOMContentLoaded', (e) => {
    updateConvertedCurrency()
}, true)


function updateConvertedCurrency() {
    baseCode = document.getElementById('base-currencies').value
    targetCode = document.getElementById('target-currencies').value
    amount = currencyAmountInput = document.getElementById('amount').value == '' ? 0 : currencyAmountInput = document.getElementById('amount').value

    // fetch('http://127.0.0.1:5555/')
    //     .then(res => res.json())
    //     .then(data => console.log(data))

    convertedAmountSection.innerText = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: `${targetCode}`,
        minimumIntegerDigits: 1,
        minimumFractionDigits: 2,
    }).format(Number(amount));
}

baseCurrencyCodeSelector.addEventListener('input', updateConvertedCurrency)
targetCurrencyCodeSelector.addEventListener('input', updateConvertedCurrency)
currencyAmountInput.addEventListener('input', updateConvertedCurrency)