baseCurrencyCodeSelector = document.getElementById('base-currencies')
targetCurrencyCodeSelector = document.getElementById('target-currencies')
currencyAmountInput = document.getElementById('amount')
convertedAmountSection = document.getElementById('converted')
conversion_rates = {}

/**
 * Handles defaults displayed during initial page load
 */
document.addEventListener('DOMContentLoaded', (e) => {
    handleBaseCurrencyUpdate()
}, true)

/**
 * Handle update to base currency selected. Updates conversion rates by
 * requesting conversion rates matching the base currency selected.
 * Handled separately to reduce unnecessary requests that may be made 
 * when changing target currency or the amount to be converted instead.
 */
function handleBaseCurrencyUpdate() {
    baseCode = document.getElementById('base-currencies').value

    fetch('http://127.0.0.1:5555/')
        .then(res => res.json())
        .then(data => {
            conversion_rates = data['conversion_rates']
        })
    
    // Update displayed amount to match updated rates for the base currency
    updateConvertedCurrency()
}

/**
 * Handle any updates to target currency and amount to be converted. Handles 
 * display of the converted amount.
 */
function updateConvertedCurrency() {
    targetCode = document.getElementById('target-currencies').value
    amount = currencyAmountInput = document.getElementById('amount').value == '' ? 0 : currencyAmountInput = document.getElementById('amount').value

    convertedAmountSection.innerText = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: `${targetCode}`,
        minimumIntegerDigits: 1,
        minimumFractionDigits: 2,
    }).format(Number(amount));
}

baseCurrencyCodeSelector.addEventListener('input', handleBaseCurrencyUpdate)
targetCurrencyCodeSelector.addEventListener('input', updateConvertedCurrency)
currencyAmountInput.addEventListener('input', updateConvertedCurrency)