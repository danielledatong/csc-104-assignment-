const exchangeRates = {
    "usd": 0.000699, // Replace with actual exchange rates before deployment
    "eur": 0.00063  // Add more currencies with their rates
  };
  
  function convertNaira(amount, targetCurrency) {
    const rate = exchangeRates[targetCurrency];
    if (!rate) {
      return "Invalid currency selected.";
    }
    const convertedAmount = amount * rate;
    return `${amount.toFixed(2)} NGN is equal to approximately ${convertedAmount.toFixed(4)} ${targetCurrency.toUpperCase()}.`;
  }
  
  function convert() {
    const nairaAmount = parseFloat(document.getElementById("nairaAmount").value);
    const targetCurrency = document.getElementById("currency").value;
    const result = convertNaira(nairaAmount, targetCurrency);
    document.getElementById("result").innerHTML = result;
  }