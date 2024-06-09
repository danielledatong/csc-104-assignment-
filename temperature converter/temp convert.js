function convertToFahrenheit(celsius) {
    // Simplified formula
    const fahrenheit = celsius * 1.8 + 30;
    return `${celsius} °C is approximately equal to ${fahrenheit.toFixed(2)} °F.`;
  }
  
  function convert() {
    const celsiusInput = document.getElementById("celsiusInput");
    const celsius = parseFloat(celsiusInput.value);
    
    // Basic input validation (optional)
    if (isNaN(celsius)) {
      document.getElementById("result").innerHTML = "Please enter a valid number.";
      return;
    }
    
    const result = convertToFahrenheit(celsius);
    document.getElementById("result").innerHTML = result;
  }