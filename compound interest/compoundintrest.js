function calculateInterest() {
    const principal = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const time = document.getElementById('time').value;
    const frequency = document.getElementById('frequency').value;
  
    // Input validation (optional)
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
      alert("Please enter valid numbers for all fields.");
      return;
    }
  
    const interestRate = rate / 100;
    let numPeriods = time;
  
    switch (frequency) {
      case "semi-annual":
        numPeriods *= 2;
        break;
      case "quarterly":
        numPeriods *= 4;
        break;
      case "monthly":
        numPeriods *= 12;
        break;
    }
  
    const amount = principal * Math.pow((1 + interestRate / numPeriods), numPeriods);
    const interest = amount - principal;
  
    const interestResult = document.getElementById('interestResult');
    interestResult.textContent = interest.toFixed(2);
  
    const totalAmountResult = document.getElementById('totalAmount');
    totalAmountResult.textContent = amount.toFixed(2);
  } 