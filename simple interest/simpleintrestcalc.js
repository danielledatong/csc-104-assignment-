function calculateInterest() {
    const principal = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const time = document.getElementById('time').value;
  
    // Input validation (optional)
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
      alert("Please enter valid numbers for all fields.");
      return;
    }
  
    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;
  
    const interestResult = document.getElementById('interestResult');
    interestResult.textContent = interest.toFixed(2);
  
    const totalAmountResult = document.getElementById('totalAmount');
    totalAmountResult.textContent = totalAmount.toFixed(2);
  }