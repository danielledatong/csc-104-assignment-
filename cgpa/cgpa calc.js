function calculateCGPA() {
    const totalCredits = document.getElementById('totalCredits').value;
    const totalGradePoints = document.getElementById('totalGradePoints').value;
    
    if (isNaN(totalCredits) || isNaN(totalGradePoints)) {
      alert("Please enter valid numbers for total credits and total grade points.");
      return;
    }
    
    const cgpa = totalGradePoints / totalCredits;
    const cgpaResult = document.getElementById('cgpaResult');
    cgpaResult.textContent = cgpa.toFixed(2);
  }