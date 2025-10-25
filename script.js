document.getElementById("submit").addEventListener("click", function() {
  let score = 0;
  const answers = {
    q1: "A",
    q2: "B",
    q3: "A"
  };

  const totalQuestions = Object.keys(answers).length;
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = ""; // Clear previous results

  for (let key in answers) {
    const selected = document.querySelector(input[name=${key}]:checked);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  // Display score and detailed feedback
  let feedback = You scored ${score} out of ${totalQuestions}!;
  
  if (score === totalQuestions) {
    feedback += " Great job!";
    resultElement.className = "correct";
  } else if (score > 0) {
    feedback += " Keep practicing!";
    resultElement.className = "partial";
  } else {
    feedback += " Try again!";
    resultElement.className = "partial";
  }
  
  resultElement.textContent = feedback;
});

// Clear the results when the reset button is clicked
document.getElementById("reset").addEventListener("click", function() {
  const resultElement = document.getElementById("result");
  resultElement.textContent = "";
  resultElement.className = "";
});